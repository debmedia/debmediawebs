import React, { useState, useEffect } from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import PostCard from "../PostCard";
import { gql, useLazyQuery } from "@apollo/client";

// TODO: Sacar esto a un servicio
const GET_POSTS = gql`
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
export default function PostsSection({ posts: posts_, paginationData: paginationData_ }) {
    const [posts, setPosts] = useState(posts_);
    const [paginationData, setPaginationData] = useState(paginationData_);
    const [getPosts, { loading, data }] = useLazyQuery(GET_POSTS, {
        //TODO: Sacar este 9 harcodeado
        variables: { first: 9, after: paginationData.endCursor },
    });
    const handleClick = () => {
        // console.log("paginationData", paginationData);
        getPosts().then((res)=> {
            setPosts(posts.concat(res.data.posts.nodes));
            setPaginationData(res.data.posts.pageInfo);
        });
    };

    return (
        <Container className="post-section">
            <div className="grid">
                {posts.map((post) => (
                    <PostCard key={post.databaseId} post={post}></PostCard>
                ))}
            </div>
            <div className="button-container mt-4">
                <Button disabled={loading} onClick={!loading ? handleClick : null} className="px-4" variant="secondary">
                    {loading ? <Spinner animation="border" role="status" size="sm"></Spinner> : "Ver más"}
                </Button>
            </div>
        </Container>
    );
}
