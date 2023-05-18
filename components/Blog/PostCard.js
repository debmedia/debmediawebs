import React from "react";
import { Link, useRouter } from "next-translate-routes";
import Image from "next/image";
import { Badge } from "react-bootstrap";
import AuthorCard from "./AuthorCard";
import { calcReadingTime } from "../../utils/utils";

export default function PostCard({ post }) {
    const {pathname} = useRouter();
    const compact = false;
    return (
        <div className={`post-card ${compact && "compact"}`}>
            <Link href={`${pathname}/${post.slug}`} passHref>
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
                                    placeholder="blur"
                                    ></Image>
                            </div>
                        <div className="card-content-container">
                            <div className="card-content">
                                {post.categories.edges.find((elem) => elem.isPrimary) ?
                                <Badge className="mb-2" bg="primary">{post.categories.edges.find((elem) => elem.isPrimary)?.node.name}</Badge>
                                :
                                // badge transparente vacio para mantener el espacio
                                <Badge className="mb-2 hidden" bg="primary">&nbsp;</Badge>
                                }
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
                                        <div className="debLink">
                                            Leer más <i className="bi bi-caret-right"></i>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="card-footer">
                                <hr></hr>
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
