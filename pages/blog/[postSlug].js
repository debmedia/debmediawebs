import { useRouter } from "next-translate-routes";
import React from "react";
import BlogNavbar from "../../components/Blog/BlogNavbar";
import CategoryNav from "../../components/Blog/CategoryNav";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PostBreadcrumbs from "../../components/Blog/Post/PostBreadcrums";
import PostHeader from "../../components/Blog/Post/PostHeader";
import { Container, Accordion } from "react-bootstrap";
import { getAllPostSlugs, getPostBySlug, getPosts, getPostsSlugs } from "../../services/wordpressGQL";
import PostBody from "../../components/Blog/Post/PostBody";
import RelatedPostsSection from "../../components/Blog/RelatedPostsSection";
import SharePost from "../../components/Blog/Post/SharePost";
import { BLOG_URL } from "../../constants/urls";
import Head from "next/head";
import {
    META_DESCRIPTION,
    META_OG_DESCRIPTION,
    META_OG_IMAGE,
    META_OG_TITLE,
    META_OG_TYPE,
    META_OG_URL,
    TITLE,
} from "../../constants/metaKeys";

export async function getStaticPaths() {
    //TODO: Sacar este 30 hardcodeado, tal vez pasarlo a una variable de ambiente
    let postSlugs;
    let fallback;
    // solo si estamos en dev no buileamos todos los posts
    if(process.env.CONTEXT && process.env.CONTEXT !== "dev") {
        postSlugs = await getAllPostSlugs();
        fallback = false;
    } else {
        postSlugs = (await getPostsSlugs({first:30})).posts;
        fallback = 'blocking';
    }

    return {
        paths: postSlugs.map((post)=> {
            return {
                params: {
                    postSlug: post.slug
                }
            }
        }),
        fallback,
    };
}

export async function getStaticProps({ locale, params }) {
    // TODO: buscar de verdad los posts relacionandos
    try {
        const post = await getPostBySlug(params.postSlug);
        if(!post) throw new Error(`Post with slug "${params.postSlug}" not found`);
        const { posts: relatedPosts } = await getPosts({ first: 6 });
        return {
            props: {
                ...(await serverSideTranslations(locale, ["blogHome", "components", "common"])),
                postData: post,
                relatedPostsData: relatedPosts,
            },
        };
    } catch (error) {
        console.error("Error fetching Posts", error);
        return {
            notFound: true,
        };
    }
}

export default function PostPage({ postData, relatedPostsData }) {
    const {asPath} = useRouter();
    return (
        <div className="blog">
            <Head>
                <title key={TITLE}>{postData.seo?.title || postData.title || "Blog Debmedia"}</title>
                <meta key={META_DESCRIPTION} name="description" content={postData.seo.metaDesc} />
                <meta key={META_OG_TITLE} property="og:title" content={postData.seo.opengraphTitle} />
                <meta key={META_OG_DESCRIPTION} property="og:description" content={postData.seo.opengraphDescription} />
                {/* TODO: habría que usar una variable de ambiente para la url base */}
                <meta key={META_OG_URL} property="og:url" content={"https://debmedia.com" + asPath} />
                <meta key={META_OG_TYPE} property="og:type" content={postData.seo.opengraphType} />
                <meta key={META_OG_IMAGE} property="og:image" content={postData.featuredImage?.node?.mediaItemUrl} />
            </Head>
            <BlogNavbar />
            <div style={{ height: "89px" }}></div>
            <CategoryNav variant="secondary" />
            <PostBreadcrumbs
                className="d-none d-sm-block"
                crumbs={[
                    { key: 1, href: BLOG_URL, label: "Home" },
                    { key: 1, active: true, label: postData.title },
                ]}></PostBreadcrumbs>
            <PostHeader post={postData} />
            <PostBody post={postData} />
            <SharePost/>
            <RelatedPostsSection posts={relatedPostsData}></RelatedPostsSection>
            {/* <Container className="mt-5">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Post Data</Accordion.Header>
                        <Accordion.Body className="py-1">
                            <div
                                style={{
                                    minHeight: "3rem",
                                    padding: "0.5rem",
                                    backgroundColor: "black",
                                    color: "white",
                                    borderRadius: "0.5rem",
                                }}>
                                <pre>{JSON.stringify(postData, null, 2)}</pre>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container> */}
        </div>
    );
}
