import React, {useState} from 'react'
import BlogNavbar from '../../../components/Blog/BlogNavbar'
import CategoryNav from "../../../components/Blog/CategoryNav";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CategoryHeader from '../../../components/Blog/Category/CategoryHeader';
import HeroPostCard from "../../../components/Blog/HeroPostCard";
import { getCategoriesBySlug, getPostByCategoryId, getPosts } from '../../../services/wordpressGQL';
import { generateBlurPlaceholders } from '../../../services/plaiceholder';
import { Accordion, Container } from 'react-bootstrap';
import CategoryPostsSection from '../../../components/Blog/Category/CategoryPostSection';
import { ApolloProvider, useLazyQuery } from '@apollo/client';
import { apolloClient } from "../../../config/apollo";
import RelatedPostsSection from '../../../components/Blog/RelatedPostsSection';
import { ObjectInspector, chromeDark } from 'react-inspector';
import { QUERY_GET_POSTS_BY_CATEGORY_ID } from "../../../services/wordpressGQLQueries";
import { BLOG_LOCALES, BLOG_RENDER_CATEGORIES } from '../../../constants/blog';
import NoPostsMessage from '../../../components/Blog/NoPostsMessage';


export async function getStaticPaths({locales}) {
    const paths = BLOG_LOCALES.reduce((paths, locale) => {
        return paths.concat(BLOG_RENDER_CATEGORIES.map((category)=> {return {params: {categorySlug: category.slug}, locale}}));
    }, []);

    return {
      paths,
      fallback: false,
    }
  }

export async function getStaticProps({ locale, params }) {
    const category = (await getCategoriesBySlug(params.categorySlug))[0];
    const {posts, pagination} = await getPostByCategoryId({first: 10, categoryIn: [category.databaseId]}, locale);
    // TODO: buscar de verdad los posts relacionandos
    const {posts: relatedPosts} = await getPosts({first: 6}, locale);

    // TODO: Integrarlo directamente en el servicio de get post
    const postsWithBlur = await generateBlurPlaceholders(posts);
    const categoryData = {
        name: category.name,
        slug: category.slug,
        id: category.databaseId
    }
    return {
        props: {
            ...(await serverSideTranslations(locale, ["blogHome", "components", "common"])),
            // postData: post,
            // relatedPostsData: relatedPosts
            categorySlug: params.categorySlug,
            categoryData,
            postsData: postsWithBlur,
            paginationData: pagination,
            categoryRaw: category,
            relatedPosts,
            // Aunque parezca que esto no hace nada hace que el estado no persista entre las distintas 
            // páginas dinámicas cuando navegamos https://github.com/vercel/next.js/issues/9992
            key: params.categorySlug,
        },
    };
}

export default function CategoryPage({categorySlug, categoryData, postsData, paginationData: paginationData_, categoryRaw, relatedPosts}) {
    const [posts, setPosts] = useState(postsData);
    const [paginationData, setPaginationData] = useState(paginationData_);
    const [getPosts, { loading, data }] = useLazyQuery(QUERY_GET_POSTS_BY_CATEGORY_ID, {
        //TODO: Sacar este 9 harcodeado
        variables: { first: 9, after: paginationData.endCursor, categoryId: categoryData.id},
        client: apolloClient
    });

    const loadMorePosts = () =>{
        getPosts().then((res)=> {
            setPosts(postsData.concat(res.data.posts.nodes));
            setPaginationData(res.data.posts.pageInfo);
        });
    }

  return (
    <ApolloProvider client={apolloClient}>
        <div className="blog">
            <BlogNavbar />
            <div style={{ height: "100px" }}></div>
            <CategoryNav variant="secondary" />
            <CategoryHeader categoryName={categoryData.name} categoryColor={categoryData.color} categorySlug={categoryData.slug}/>
            <HeroPostCard post={posts[0]} compact badgeColor={categoryData.slug}/>
            {posts.length > 0 && <Container className='px-0 mb-5'><hr/></Container>}
            <CategoryPostsSection posts={posts.slice(1)} paginationData={paginationData} category={categoryData} loadMoreCallback={loadMorePosts} loading={loading}/>
            {posts.length < 1 && <NoPostsMessage/>}
            <RelatedPostsSection posts={relatedPosts}></RelatedPostsSection>
            {/* <Container className="mt-5">
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
                                <pre>{JSON.stringify(paginationData, null, 2)}</pre>
                                <ObjectInspector theme={{...chromeDark, ...({BASE_FONT_SIZE: "1rem", TREENODE_FONT_SIZE: "1rem"})}} name="categoryRaw" data={categoryRaw}></ObjectInspector>
                                <ObjectInspector theme={{...chromeDark, ...({BASE_FONT_SIZE: "1rem", TREENODE_FONT_SIZE: "1rem"})}} name="postsData" data={posts}></ObjectInspector>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container> */}
        </div>
    </ApolloProvider>
  )
}
