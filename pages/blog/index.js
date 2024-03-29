import React from "react";
import BlogNavbar from "../../components/Blog/BlogNavbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CategoryNav from "../../components/Blog/CategoryNav";
import HeroPostCard from "../../components/Blog/HeroPostCard";
import LatestNewsSection from "../../components/Blog/BlogHome/LatestNewsSection";
import { apolloClient } from "../../config/apollo";
import { gql, ApolloProvider } from "@apollo/client";
import NewsLetterBanner from "../../components/Blog/NewsLetterBanner";
import { Accordion, Container } from "react-bootstrap";
import PostsSection from "../../components/Blog/BlogHome/PostsSection";
import PodcastSection from "../../components/Blog/BlogHome/PodcastSection";
import { getPostByCategorySlug, getPosts } from "../../services/wordpressGQL";
import { generateBlurPlaceholders } from "../../services/plaiceholder";
import { BLOG_LOCALES } from "../../constants/blog";
import NoPostsMessage from "../../components/Blog/NoPostsMessage";

export async function getStaticProps({ locale }) {
    // si no es los locales del blog devolvemos not found
    if (!BLOG_LOCALES.includes(locale)) return {
        notFound: true
    }
    const {posts, pagination} = await getPosts({first: 14}, locale);
    const {posts: podcastPosts, pagination: podcastPagination} = await getPostByCategorySlug({categorySlug: "podcast", first: 1}, locale);
    // TODO: Integrarlo directamente en el servicio de get post
    const postsWithBlur = await generateBlurPlaceholders(posts);
    const podcastPostsWithBlur = await generateBlurPlaceholders(podcastPosts);
    return {
        props: {
            ...(await serverSideTranslations(locale, ["blogHome", "components", "common"])),
            postsData: postsWithBlur,
            paginationData: pagination,
            podcastPostData: podcastPostsWithBlur,
        },
    };
}

export default function BlogHome({ postsData, paginationData, podcastPostData }) {
    return (
        <ApolloProvider client={apolloClient}>
            <div className="blog">
                <BlogNavbar></BlogNavbar>
                <div style={{ height: "89px" }}></div>
                <CategoryNav />
                <HeroPostCard post={postsData[0]} h1/>
                <LatestNewsSection posts={postsData.slice(1, 4)}/>
                {/* <NewsLetterBanner></NewsLetterBanner> */}
                <PostsSection posts={postsData.slice(4, 13)} paginationData={paginationData}/>
                {postsData.length < 5 && <NoPostsMessage/>}
                <PodcastSection post={podcastPostData[0]}/>
                {process.env.CONTEXT === "dev" &&
                    <Container className="mt-5">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Post Data</Accordion.Header>
                                <Accordion.Body>
                                    <div
                                        style={{
                                            minHeight: "3rem",
                                            padding: "2rem",
                                            fontSize: "1.5rem",
                                            backgroundColor: "black",
                                            color: "white",
                                            borderRadius: "0.5rem",
                                        }}>
                                        <pre>Number of posts: {postsData.length}</pre>
                                        <pre>{JSON.stringify(postsData, null, 2)}</pre>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Podcast Post Data</Accordion.Header>
                                <Accordion.Body>
                                    <div
                                        style={{
                                            minHeight: "3rem",
                                            padding: "2rem",
                                            fontSize: "1.5rem",
                                            backgroundColor: "black",
                                            color: "white",
                                            borderRadius: "0.5rem",
                                        }}>
                                        <pre>{JSON.stringify(podcastPostData, null, 2)}</pre>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Container>
                }
            </div>
        </ApolloProvider>
    );
}
