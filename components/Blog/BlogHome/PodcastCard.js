import Image from "next/image";
import React from "react";
import spotifyLogo from "../../../asset/imgs/blog/spotify-logo.svg";
import playBtnIcon from "../../../asset/imgs/blog/play-btn-icon.svg";
import { Link, useRouter } from "next-translate-routes";

export default function PodcastCard({ post }) {
    const { pathname } = useRouter();
    if(!post) return null;
    return (
        <div className="podcast-card">
            <Link href={`${pathname}/${post.slug}`} passHref>
                <a className="reset-a">
                    <div className="imageContainer">
                        <div className="spotify-logo">
                            <Image src={spotifyLogo} layout="responsive" alt="spotify"></Image>
                        </div>

                        <div className="play-button">
                            <Image src={playBtnIcon} layout="responsive" alt="play"></Image>
                        </div>
                        {post.featuredImage?.node?.mediaItemUrl && (
                            <Image
                                src={post.featuredImage?.node?.mediaItemUrl}
                                layout="fill"
                                objectFit="cover"
                                alt={post.title}
                                sizes="(min-width: 768px) 50vw, 100vw"
                                blurDataURL={post.featuredImage?.node?.blur}
                                placeholder="blur"></Image>
                        )}
                    </div>
                    <div className="content-container">
                        <p className="pre mb-1">Hablemos de...</p>
                        <h3 className="title">{post.title}</h3>
                        <p className="excerpt">{post.excerpt}</p>
                    </div>
                </a>
            </Link>
        </div>
    );
}
