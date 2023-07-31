import React from "react";
import { Link } from "next-translate-routes";
import Image from "next/image";
import { Badge } from "react-bootstrap";
import AuthorCard from "./AuthorCard";
import { calcReadingTime } from "../../utils/utils";
import { BLOG_URL } from "../../constants/blog";
import { useTranslation, Trans } from 'next-i18next';

export default function PostCard({ post, compact, secondary, excerpt }) {
    const { t } = useTranslation(['blogHome', 'common']);
    let category;
    if (post.categories.edges.length > 0) {
        category = post.categories.edges.find((elem) => elem.isPrimary);
        if (!category) category = post.categories.edges[0];
    }
    return (
        <div className={`post-card ${compact && "compact"} ${secondary && "secondary"}`}>
            <Link href={`${BLOG_URL}/${post.slug}`} passHref>
                <a className="reset-a">
                    <div className="card-wrapper">
                        <div className="imageContainer">
                            {post.featuredImage?.node?.mediaItemUrl && (
                                <Image
                                    src={post.featuredImage?.node?.mediaItemUrl}
                                    layout="fill"
                                    objectFit="cover"
                                    alt={post.title}
                                    sizes="(min-width: 768px) 50vw, (min-width: 992px) 33vw, 100vw"
                                    blurDataURL={post.featuredImage?.node?.blur}
                                    placeholder={post.featuredImage?.node?.blur ? "blur" : ""}></Image>
                            )}
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
                                    <>
                                        { excerpt && <p
                                            className="excerpt my-1"
                                            dangerouslySetInnerHTML={{
                                                __html: post.excerpt,
                                            }}></p>}
                                        <div className="debLink">
                                            {t("common:READ_MORE")} <i className="bi bi-caret-right"></i>
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
