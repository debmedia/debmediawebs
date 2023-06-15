import React from 'react'
import BlogNavbar from '../../../components/Blog/BlogNavbar'
import CategoryNav from "../../../components/Blog/CategoryNav";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CategoryHeader from '../../../components/Blog/Category/CategoryHeader';
import HeroPostCard from "../../../components/Blog/HeroPostCard";
import { getCategoriesBySlug, getPostByCategoryId, getPosts } from '../../../services/wordpressGQL';
import { generateBlurPlaceholders } from '../../../services/plaiceholder';
import { Accordion, Container } from 'react-bootstrap';
import CategoryPostsSection from '../../../components/Blog/Category/CategoryPostSection';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from "../../../config/apollo";
import RelatedPostsSection from '../../../components/Blog/RelatedPostsSection';
import { ObjectInspector, chromeDark } from 'react-inspector';

export async function getStaticPaths() {

    //TODO: configurar la paginas que se generan en build time
    // const posts = await getPosts({first: 1});
    return {
      paths: [
        // { params: { postSlug: posts[0].slug } },
      ],
      fallback: 'blocking',
    }
  }

export async function getStaticProps({ locale, params }) {
    const category = (await getCategoriesBySlug(params.categorySlug))[0];
    const {posts, pagination} = await getPostByCategoryId({first: 10, categoryId: category.databaseId});
    // TODO: buscar de verdad los posts relacionandos
    const {posts: relatedPosts} = await getPosts({first: 6});

    // TODO: Integrarlo directamente en el servicio de get post
    const postsWithBlur = await generateBlurPlaceholders(posts);
    const categoryData = {
        name: category.name,
        slug: category.slug
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
            relatedPosts
        },
    };
}

export default function CategoryPage({categorySlug, categoryData, postsData, paginationData, categoryRaw, relatedPosts}) {
  return (
    <ApolloProvider client={apolloClient}>
        <div className="blog">
            <BlogNavbar />
            <div style={{ height: "100px" }}></div>
            <CategoryNav variant="secondary" />
            <CategoryHeader categoryName={categoryData.name} categoryColor={categoryData.color} categorySlug={categoryData.slug}/>
            <HeroPostCard post={postsData[0]} compact badgeColor={categoryData.slug}/>
            <Container className='px-0 mb-5'><hr/></Container>
            <CategoryPostsSection posts={postsData.slice(1)} paginationData={paginationData} categorySlug={categoryData.slug}/>
            <RelatedPostsSection posts={relatedPosts}></RelatedPostsSection>
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
                                <pre>{JSON.stringify(categorySlug, null, 2)}</pre>
                                <ObjectInspector theme={{...chromeDark, ...({BASE_FONT_SIZE: "1rem", TREENODE_FONT_SIZE: "1rem"})}} name="categoryRaw" data={categoryRaw}></ObjectInspector>
                                <ObjectInspector theme={{...chromeDark, ...({BASE_FONT_SIZE: "1rem", TREENODE_FONT_SIZE: "1rem"})}} name="postsData" data={postsData}></ObjectInspector>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    </ApolloProvider>
  )
}
