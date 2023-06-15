import React from 'react'
import BlogNavbar from '../../components/Blog/BlogNavbar'
import CategoryNav from "../../components/Blog/CategoryNav";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CategoryHeader from '../../components/Blog/Category/CategoryHeader';
import { getPostBySearchTerm, getPosts } from '../../services/wordpressGQL';
import { generateBlurPlaceholders } from '../../services/plaiceholder';
import CategoryPostsSection from '../../components/Blog/Category/CategoryPostSection';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from "../../config/apollo";
import RelatedPostsSection from '../../components/Blog/RelatedPostsSection';



export async function getServerSideProps({ locale, query }) {
    const searchTerm = query.q;
    const searchPromise = getPostBySearchTerm({first: 10, searchTerm});
    // TODO: buscar de verdad los posts relacionandos
    const relatedPostPromise = getPosts({first: 6});
    
    const {posts, pagination} = await searchPromise;
    const {posts: relatedPosts} = await relatedPostPromise;

    // TODO: Integrarlo directamente en el servicio de get post
    // en este caso como estamos haciendo ssr tal ves nos esta afectando negativamente la perfomance
    // Pero todo espera tener una imagen blur... asi que no se si vale la pena cambiarlo.
    const postsWithBlur = await generateBlurPlaceholders(posts);

    return {
        props: {
            ...(await serverSideTranslations(locale, ["blogHome", "components", "common"])),
            postsData: postsWithBlur,
            paginationData: pagination,
            relatedPosts,
            searchTerm
        },
    };
}

export default function CategoryPage({postsData, paginationData, relatedPosts, searchTerm}) {
  return (
    <ApolloProvider client={apolloClient}>
        <div className="blog">
            <BlogNavbar />
            <div style={{ height: "100px" }}></div>
            <CategoryNav variant="secondary" />
            <CategoryHeader categoryName={"Buscar: " + searchTerm}/>
            <CategoryPostsSection posts={postsData} paginationData={paginationData} />
            <RelatedPostsSection posts={relatedPosts}></RelatedPostsSection>
        </div>
    </ApolloProvider>
  )
}
