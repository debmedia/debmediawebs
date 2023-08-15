import Image from "next/image";
import React from "react";
import { Link, useRouter } from "next-translate-routes";
import AuthorCard from "../AuthorCard";
import { calcReadingTime } from "../../../utils/utils";
import { useTranslation, Trans } from 'next-i18next';
import CategoryBadge from "../CategoryBadge";

export default function LatestNewsCard({ post, compact }) {
    const { t } = useTranslation(['blogHome', 'common']);
    const { pathname } = useRouter();

    return (
        <div className={`latestNewsCard ${compact && "compact"}`}>
            <Link href={`${pathname}/${post.slug}`}>
                <a className="reset-a">
                    {post.featuredImage?.node?.mediaItemUrl && (
                        <Image
                            src={post.featuredImage?.node?.mediaItemUrl}
                            layout="fill"
                            objectFit="cover"
                            alt={post.title}
                            style={{ zIndex: "-10" }}
                            sizes="(min-width: 768px) 50vw, 100vw"
                            blurDataURL={post.featuredImage?.node?.blur}
                            placeholder="blur"></Image>
                    )}
                    <CategoryBadge bg="primary" slug={post.categories.edges.find((elem) => elem.isPrimary)?.node.slug}/>
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
                                {t("common:READ_MORE")}<i className="bi bi-caret-right"></i>
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
