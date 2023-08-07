import React, { useState, useEffect } from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import PostCard from "../PostCard";
import { useLazyQuery } from "@apollo/client";
import { QUERY_GET_POSTS } from "../../../services/wordpressGQL";


export default function PostsSection({ posts: posts_, paginationData: paginationData_ }) {
    const [posts, setPosts] = useState(posts_);
    const [paginationData, setPaginationData] = useState(paginationData_);
    const [getPosts, { loading, data }] = useLazyQuery(QUERY_GET_POSTS, {
        //TODO: Sacar este 9 harcodeado
        variables: { first: 9, after: paginationData.endCursor },
    });
    const handleClick = () => {
        getPosts().then((res)=> {
            setPosts(posts.concat(res.data.posts.nodes));
            setPaginationData(res.data.posts.pageInfo);
        });
    };

    useEffect(()=>{
        setPosts(posts_);
    }, [posts_])

    return (
        <Container className="post-section mt-5">
            {Array.isArray(posts) && posts.length > 1 &&
            <>
                <div className="grid">
                    {posts.map((post) => (
                        <PostCard key={post.databaseId} post={post}></PostCard>
                    ))}
                </div>
                <div className="button-container mt-4">
                    {paginationData.hasNextPage && <Button disabled={loading} onClick={!loading ? handleClick : null} className="px-4" variant="secondary">
                        {loading ? <Spinner animation="border" role="status" size="sm"></Spinner> : "Ver más"}
                    </Button>}
                </div>
            </>
            }
            {Array.isArray(posts) && posts.length == 0 && 
            <p className="text-center h2">No hay mas artículos. Puedes seguir por aqui link</p>
            }
        </Container>
    );
}
