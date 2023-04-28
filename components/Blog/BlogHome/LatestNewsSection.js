import React from "react";
import { Container } from "react-bootstrap";
import LatestNewsCard from "./LatestNewsCard";

export default function LatestNewsSection({ posts }) {
    return (
        <Container as={"section"} className="latestNewsSection">
            <div>
                <h2 className="text-center my-3 my-md-5">Últimas notas</h2>
            </div>
            <div className="latestNewsSection_grid">
                {posts.map((post, index) => {
                    const compact = !(index % 6 === 0 || index - (4 % 6) === 0);
                    return (
                        <div key={post.databaseId} className={compact ? "" : "row-span-2"}>
                            <LatestNewsCard post={post} compact={compact} />
                        </div>
                    );
                })}
            </div>
        </Container>
    );
}
