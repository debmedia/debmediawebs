import Image from "next/image";
import React from "react";
import { Badge } from "react-bootstrap";
import { Link } from "next-translate-routes";
import AuthorCard from "../AuthorCard";
import { calcReadingTime } from "../../../utils/utils";

export default function LatestNewsCard({ post, compact }) {
    return (
        <div className={`latestNewsCard ${compact && "compact"}`}>
            <Link href={post.link}>
                <a className="reset-a">
                    {/* TODO: ver si se puede optimizar la imagen */}
                    <Image
                        src={post.featuredImage.node.mediaItemUrl}
                        layout="fill"
                        objectFit="cover"
                        alt={post.title}
                        style={{ zIndex: "-10" }}></Image>
                    <Badge bg="primary">{post.categories.edges.find((elem) => elem.isPrimary)?.node.name}</Badge>
                    <h3
                        className="title"
                        dangerouslySetInnerHTML={{
                            __html: post.title,
                        }}></h3>
                    {!compact && (
                        <>
                            <p
                                className="excerpt my-1"
                                dangerouslySetInnerHTML={{
                                    __html: post.excerpt,
                                }}></p>
                            <div className="debLink mb-3">
                                Leer más <i className="bi bi-caret-right"></i>
                            </div>
                        </>
                    )}
                    <AuthorCard
                        variant="white"
                        author={post.author.node}
                        createdDate={post.dateGmt}
                        readTime={calcReadingTime(post.content)}></AuthorCard>
                </a>
            </Link>
        </div>
    );
}
