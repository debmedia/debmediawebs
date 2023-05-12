import React from "react";
import BlogNavbar from "../../components/Blog/BlogNavbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CategoryNav from "../../components/Blog/CategoryNav";
import HeroPostCard from "../../components/Blog/HeroPostCard";
import LatestNewsSection from "../../components/Blog/BlogHome/LatestNewsSection";
import { apolloClient } from "../../config/apollo";
import { gql } from "@apollo/client";
import NewsLetterBanner from "../../components/Blog/NewsLetterBanner";

export async function getStaticProps({ locale }) {
    //TODO: sacar esto a un servicio con las queries
    const res = await apolloClient.query({
        query: gql`
            query getPosts {
                posts {
                    nodes {
                        content
                        dateGmt
                        excerpt
                        modifiedGmt
                        status
                        title
                        link
                        databaseId
                        author {
                            node {
                                databaseId
                                name
                                avatar {
                                    url
                                }
                            }
                        }
                        categories {
                            edges {
                                isPrimary
                                node {
                                    name
                                    databaseId
                                    slug
                                    parent {
                                        node {
                                            databaseId
                                            name
                                            slug
                                        }
                                    }
                                }
                            }
                        }
                        featuredImage {
                            node {
                                mediaItemUrl
                                title
                            }
                        }
                    }
                }
            }
        `,
    });

    return {
        props: {
            ...(await serverSideTranslations(locale, ["blogHome", "components", "common"])),
            postsData: res.data.posts.nodes,
        },
    };
}

export default function BlogHome({ postsData }) {
    return (
        <div className="blog">
            <BlogNavbar></BlogNavbar>
            <div style={{ height: "89px" }}></div>
            <CategoryNav />
            <HeroPostCard post={postsData[0]} />
            <LatestNewsSection posts={postsData.slice(1, 4)}></LatestNewsSection>
            <NewsLetterBanner></NewsLetterBanner>
            <div>
                <div
                    style={{
                        minHeight: "3rem",
                        padding: "2rem",
                        fontSize: "1.5rem",
                        backgroundColor: "black",
                        color: "white",
                        margin: "3rem",
                        borderRadius: "0.5rem",
                    }}>
                    <pre>{JSON.stringify(postsData, null, 2)}</pre>
                </div>
            </div>
        </div>
    );
}
