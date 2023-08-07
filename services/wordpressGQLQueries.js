import { gql } from "@apollo/client";
import { LANGS_PARENT_CATEGORY_ID } from "../constants/blog";

// Fragments
const CORE_POST_FIELDS = gql`
    fragment CorePostFields on Post {
        content
            dateGmt
            excerpt
            modifiedGmt
            status
            title
            link
            databaseId
            slug
            author {
                node {
                    databaseId
                    name
                    avatar {
                        url
                    }
                }
            }
            categories {
                edges {
                    isPrimary
                    node {
                        name
                        databaseId
                        slug
                        parent {
                            node {
                                databaseId
                                name
                                slug
                            }
                        }
                    }
                }
            }
            featuredImage {
                node {
                    mediaItemUrl
                    title
                }
            }
    }
`;
// Queries

export const QUERY_GET_POST_BY_SLUG = gql`
    ${CORE_POST_FIELDS}
    query getPost($slug: ID!) {
        post(id: $slug, idType: SLUG) {
            ...CorePostFields
            seo {
                title
                metaDesc
                opengraphTitle
                opengraphDescription
                opengraphType
                metaKeywords
                focuskw
            }
        }
    }
`;

export const QUERY_GET_POSTS = gql`
    ${CORE_POST_FIELDS}
    query getPosts($first: Int, $after: String, $categoryId: Int) {
        posts(first: $first, after: $after, where: { status: PUBLISH, categoryId: $categoryId }) {
            pageInfo {
                hasNextPage
                endCursor
            }
            nodes {
                ...CorePostFields
            }
        }
    }
`;

export const QUERY_GET_POSTS_SLUGS = gql`
    query getPosts($first: Int, $after: String) {
        posts(first: $first, after: $after, where: { status: PUBLISH }) {
            pageInfo {
                hasNextPage
                endCursor
            }
            nodes {
                slug
                link
                categories(where: {parent: ${LANGS_PARENT_CATEGORY_ID}}) {
                    nodes {
                        slug
                    }
                }
            }
        }
    }
`;

export const QUERY_GET_POSTS_BY_CATEGORY_ID = gql`
    ${CORE_POST_FIELDS}
    query getPosts($first: Int, $after: String, $categoryId: Int, $categoryIn: [ID]) {
        posts(first: $first, after: $after, where: { status: PUBLISH, categoryId: $categoryId, categoryIn: $categoryIn}) {
            pageInfo {
                hasNextPage
                endCursor
            }
            nodes {
                ...CorePostFields
            }
        }
    }
`;

export const QUERY_GET_POSTS_BY_SEARCH_TERM = gql`
    ${CORE_POST_FIELDS}
    query getPosts($first: Int, $after: String, $searchTerm: String, $categoryId: Int) {
        posts(first: $first, after: $after, where: { status: PUBLISH, search: $searchTerm, categoryId: $categoryId}) {
            pageInfo {
                hasNextPage
                endCursor
            }
            nodes {
                ...CorePostFields
            }
        }
    }
`;

export const QUERY_GET_ROOT_CATEGORIES = gql`
    query getCategories {
        categories (where: {parent: null}) {
            nodes  {
                slug
                name 
                uri
                databaseId
                children {
                    nodes {
                        slug
                    }
                } 
            }
        }
    }
`;

export const QUERY_GET_CATEGORIES_BY_SLUG = gql`
    query getCategoriesBySlug($slug: String) {
        categories(where: {slug: [$slug]}) {
            nodes {
            databaseId
            slug
            name
            }
        }
    }
`;
