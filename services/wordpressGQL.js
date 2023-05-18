import { apolloClient } from "../config/apollo";
import { gql } from "@apollo/client";

// Queries

export const QUERY_GET_POST_BY_SLUG = gql`
    query getPost($slug: ID!) {
        post(id: $slug, idType: SLUG) {
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
    }
`;

export const QUERY_GET_POSTS = gql`
    query getPosts($first: Int, $after: String) {
        posts(first: $first, after: $after, where: { status: PUBLISH }) {
            pageInfo {
                hasNextPage
                endCursor
            }
            nodes {
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
        }
    }
`;

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