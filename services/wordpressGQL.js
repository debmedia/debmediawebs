import { apolloClient } from "../config/apollo";
import { gql } from "@apollo/client";

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
`

// Queries

export const QUERY_GET_POST_BY_SLUG = gql`
    ${CORE_POST_FIELDS}
    query getPost($slug: ID!) {
        post(id: $slug, idType: SLUG) {
            ...CorePostFields
        }
    }
`;

export const QUERY_GET_POSTS = gql`
    ${CORE_POST_FIELDS}
    query getPosts($first: Int, $after: String) {
        posts(first: $first, after: $after, where: { status: PUBLISH }) {
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

export const QUERY_GET_POSTS_BY_CATEGORY_ID = gql`
    ${CORE_POST_FIELDS}
    query getPosts($first: Int, $after: String, $categoryId: Int) {
        posts(first: $first, after: $after, where: { status: PUBLISH, categoryId: $categoryId}) {
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
`

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
`

export async function getPostBySlug(slug) {
    const res = await apolloClient.query({
        variables: { slug },
        query: QUERY_GET_POST_BY_SLUG,
    });

    return res.data.post;
}


export async function getPosts({first, after}) {
    const res = await apolloClient.query({variables:{first, after}, query: QUERY_GET_POSTS});
    console.log(res);
    return {
        posts: res.data.posts.nodes,
        pagination: res.data.posts.pageInfo
    }
}

export async function getRootCategories() {
    const res = await apolloClient.query({query: QUERY_GET_ROOT_CATEGORIES});
    return res.data.categories.nodes;
}

export async function getCategoriesBySlug(slug) {
    const res = await apolloClient.query({variables:{slug}, query: QUERY_GET_CATEGORIES_BY_SLUG});
    return res.data.categories.nodes;
}

export async function getPostByCategoryId({first, after, categoryId}) {
    const res = await apolloClient.query({variables:{first, after, categoryId}, query: QUERY_GET_POSTS_BY_CATEGORY_ID});
    return {
        posts: res.data.posts.nodes,
        pagination: res.data.posts.pageInfo
    }
}