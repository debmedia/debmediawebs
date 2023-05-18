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
import { getPosts } from "../../services/wordpressGQL";
import { getPlaiceholder } from "plaiceholder";


// toma la lista de Post que viene del graphql y le agregar el blur
// TODO: Sacarlo a otro archivo, error handling
async function generateBlurPlaceholders(posts) {
    const promises = posts.map(async (post) =>{
        const {base64, img} = await getPlaiceholder(post.featuredImage.node.mediaItemUrl);
        return  base64;
    });
    const metaImages = await Promise.all(promises);
    return posts.map((post, index) => {
        //deep copy cabeza
        const copyPost = JSON.parse(JSON.stringify(post));
        copyPost.featuredImage.node.blur = metaImages[index];
        return copyPost;
    });
}

export async function getStaticProps({ locale }) {
    const {posts, pagination} = await getPosts({first: 14});
    const postsWithBlur = await generateBlurPlaceholders(posts);
    return {
        props: {
            ...(await serverSideTranslations(locale, ["blogHome", "components", "common"])),
            postsData: postsWithBlur,
            paginationData: pagination
        },
    };
}

export default function BlogHome({ postsData, paginationData }) {
    return (
        <ApolloProvider client={apolloClient}>
            <div className="blog">
                <BlogNavbar></BlogNavbar>
                <div style={{ height: "89px" }}></div>
                <CategoryNav />
                <HeroPostCard post={postsData[0]} />
                <LatestNewsSection posts={postsData.slice(1, 4)}></LatestNewsSection>
                <NewsLetterBanner></NewsLetterBanner>
                <PostsSection posts={postsData.slice(4, 13)} paginationData={paginationData}></PostsSection>
                <PodcastSection post={postsData[13]}></PodcastSection>
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
                                        <pre>{JSON.stringify(postsData, null, 2)}</pre>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Container>

            </div>
        </ApolloProvider>
    );
}
