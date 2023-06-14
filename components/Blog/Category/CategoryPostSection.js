import React, { useState, useEffect } from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import { gql, useLazyQuery } from "@apollo/client";
import { QUERY_GET_POSTS } from "../../../services/wordpressGQL";
import CategoryPostCard from "./CategoryPostCard";


export default function CategoryPostsSection({ posts: posts_, paginationData: paginationData_ }) {
    const [posts, setPosts] = useState(posts_);
    const [paginationData, setPaginationData] = useState(paginationData_);
    const [getPosts, { loading, data }] = useLazyQuery(QUERY_GET_POSTS, {
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
        <Container className="category-post-section mb-4">
            <div>
                {posts.map((post) => (
                    <>
                    <CategoryPostCard key={post.databaseId} post={post}></CategoryPostCard>
                    <hr className="mb-5 mt-4"/>
                    </>

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
