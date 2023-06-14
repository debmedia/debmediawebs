import React from 'react'
import BlogNavbar from '../../../components/Blog/BlogNavbar'
import CategoryNav from "../../../components/Blog/CategoryNav";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CategoryHeader from '../../../components/Blog/Category/CategoryHeader';
import HeroPostCard from "../../../components/Blog/HeroPostCard";
import { getPosts } from '../../../services/wordpressGQL';
import { generateBlurPlaceholders } from '../../../services/plaiceholder';
import { Container } from 'react-bootstrap';
import CategoryPostsSection from '../../../components/Blog/Category/CategoryPostSection';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from "../../../config/apollo";

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
    // const post = await getPostBySlug(params.categorySlug);
    // TODO: buscar de verdad los posts relacionandos
    // const {posts: relatedPosts} = await getPosts({first: 6});
    const {posts, pagination} = await getPosts({first: 14});
    // TODO: Integrarlo directamente en el servicio de get post
    const postsWithBlur = await generateBlurPlaceholders(posts);
    const categoryData = {
        color: "#2F9FEE",
        name: "Novedades"
    }
    return {
        props: {
            ...(await serverSideTranslations(locale, ["blogHome", "components", "common"])),
            // postData: post,
            // relatedPostsData: relatedPosts
            categorySlug: params.categorySlug,
            categoryData,
            postsData: postsWithBlur,
            paginationData: pagination
        },
    };
}

export default function CategoryPage({categorySlug, categoryData, postsData, paginationData}) {
  return (
    <ApolloProvider client={apolloClient}>
        <div className="blog">
            <BlogNavbar />
            <div style={{ height: "89px" }}></div>
            <CategoryNav variant="secondary" />
            {/* <div>{categorySlug}</div> */}
            <CategoryHeader categoryName={categoryData.name} categoryColor={categoryData.color}/>
            <HeroPostCard post={postsData[0]} compact />
            <Container className='px-0 mb-5'><hr/></Container>
            <CategoryPostsSection posts={postsData.slice(1, 11)} paginationData={paginationData}/>
        </div>
    </ApolloProvider>
  )
}
