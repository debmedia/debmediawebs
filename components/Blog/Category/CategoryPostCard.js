import { Link } from "next-translate-routes";
import Image from "next/image";
import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import AuthorCard from "../AuthorCard";
import { BLOG_URL } from "../../../constants/blog";
import { calcReadingTime } from "../../../utils/utils";

export default function CategoryPostCard({ post, compact, secondary }) {
    let category;
    if (post.categories.edges.length > 0){
        category = post.categories.edges.find((elem) => elem.isPrimary);
        if (!category) category = post.categories.edges[0];
    }

    return (
        <div className={`category-post-card ${compact && "compact"} ${secondary && "secondary"}`}>
            <Link href={`${BLOG_URL}/${post.slug}`} passHref>
                <a className="reset-a">
                    <div className="card-wrapper">
                        <div className="imageContainer">
                            <Image
                                src={post.featuredImage.node.mediaItemUrl}
                                layout="fill"
                                objectFit="cover"
                                alt={post.title}
                                sizes="(min-width: 768px) 50vw, (min-width: 992px) 33vw, 100vw"
                                blurDataURL={post.featuredImage.node.blur}
                                placeholder={post.featuredImage.node.blur ? "blur" : ""}></Image>
                        </div>
                        <div className="card-content-container">
                            <div className="card-content">
                                {category ? (
                                    <Badge className="mb-2" bg="primary">
                                        {category?.node.name}
                                    </Badge>
                                ) : (
                                    // badge transparente vacio para mantener el espacio
                                    <Badge className="mb-2 hidden" bg="primary">
                                        &nbsp;
                                    </Badge>
                                )}
                                <h3
                                    className="title"
                                    dangerouslySetInnerHTML={{
                                        __html: post.title,
                                    }}></h3>
                                {!compact && (
                                    <p
                                        className="excerpt my-1"
                                        dangerouslySetInnerHTML={{
                                            __html: post.excerpt,
                                        }}></p>
                                )}
                            </div>
                            <div className="card-footer">
                                <AuthorCard
                                    author={post.author.node}
                                    createdDate={post.dateGmt}
                                    readTime={calcReadingTime(post.content)}></AuthorCard>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
}
