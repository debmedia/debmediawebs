import React from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import CategoryPostCard from "./CategoryPostCard";

export default function CategoryPostsSection({ posts, paginationData, category, loadMoreCallback, loading }) {
    const handleClick = () => {
        if (typeof loadMoreCallback === "function") loadMoreCallback();
    };

    return (
        <Container className="category-post-section mb-4">
            <div>
                {posts.map((post) => (
                    <div key={post.databaseId}>
                        <CategoryPostCard post={post} badgeColor={category?.slug}></CategoryPostCard>
                        <hr className="mb-5 mt-4" />
                    </div>
                ))}
            </div>
            <div className="button-container mt-4">
                {paginationData.hasNextPage && (
                    <Button
                        disabled={loading}
                        onClick={!loading ? handleClick : null}
                        variant={category?.slug}
                        className="px-4 btn-primary"
                        style={{ color: "white" }}>
                        {loading ? <Spinner animation="border" role="status" size="sm"></Spinner> : "Ver más"}
                    </Button>
                )}
            </div>
        </Container>
    );
}
