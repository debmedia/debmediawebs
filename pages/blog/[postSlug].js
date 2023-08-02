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

function httpToHttps(content) {
    if (!(typeof content === 'string')) return content;
    const re = /http:\/\//g;
    return content.replace(re, 'https://');
}

export async function getStaticPaths({locales}) {
    //TODO: Sacar este 30 hardcodeado, tal vez pasarlo a una variable de ambiente
    let postSlugs;
    let fallback;
    // solo si estamos en dev no buileamos todos los posts
    if(process.env.CONTEXT && process.env.CONTEXT !== "dev") {
        postSlugs = await getAllPostSlugs();
        fallback = true;
    } else {
        postSlugs = (await getPostsSlugs({first:30})).posts;
        fallback = 'blocking';
    }
    // pre renderamos solo los que no van a tener redirect mas abajo para que no tire error en el build
    // y sacamos los que no tengan categorias ya que en getPostsSlugs y getAllPostSlugs solo agarramos las
    // categorias de idioma, en definitiva filtramos los que no tienen categoria de idioma. es una chanchada ya lo se
    const paths = postSlugs.filter((post) => {
        return post.link.startsWith("https://debmedia.com") && post.categories.nodes.length > 0;
    }).map((post)=> {
        return {
            params: {
                postSlug: post.slug,
            },
            // aca elegimos el primer idioma, pero lo correcto seria iterar por todos los idiomas
            // pero como en la practica solo va a tener un idioma esta mas o menos bien asi.
            locale: post.categories.nodes[0]
        }
    })
    return {
        paths,
        fallback,
    };
}

export async function getStaticProps({ locale, params }) {
    // TODO: buscar de verdad los posts relacionandos
    try {
        // Esta chanchada es porque Object.isFrozen(post) == true y debe ser algo de apollo client
        const post = JSON.parse(JSON.stringify(await getPostBySlug(params.postSlug)));
        if(!post) throw new Error(`Post with slug "${params.postSlug}" not found`);
        const { posts: relatedPosts } = await getPosts({ first: 6 }, locale);
        // pasar todas los links en el contendido a https para que no se queje netlify
        post.content = httpToHttps(post.content);
        // para el plugin de link any where o como se llame, si el link no es de la pagina redirigimos
        // Esto es un work arround por dos maneras
        // 1. Fijarse si el link empieza, deberíamos hacer un query de la metadata del post a la variable _links_to
        // 2. No deberíamos hacer una redireccion desde el cliente sino que armar los redirects de ante mano y agregarlos
        // a la config de Next.js
        // pero bueno ¯\_(ツ)_/¯
        if (!post.link.startsWith("https://debmedia.com")) return {
                redirect: {
                    destination: post.link,
                },
            };

        //si no tiene categoria del idioma actual lo mandamos a la blog del home
        if (!post.categories.edges.map((category) => category.node.slug).includes(locale)) return {
            redirect: {
                destination: "/blog"
            }
        };

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
    // no se porque aveces llega undefined en postData todo un misterio
    if (!postData) {
        return "Loading...";
    }

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
            <Container className="mt-5">
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
            </Container>
        </div>
    );
}
