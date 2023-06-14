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