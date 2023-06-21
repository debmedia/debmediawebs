import React, { useState } from 'react'
import BlogNavbar from '../../components/Blog/BlogNavbar'
import CategoryNav from "../../components/Blog/CategoryNav";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CategoryHeader from '../../components/Blog/Category/CategoryHeader';
import { getPostBySearchTerm, getPosts } from '../../services/wordpressGQL';
import { generateBlurPlaceholders } from '../../services/plaiceholder';
import CategoryPostsSection from '../../components/Blog/Category/CategoryPostSection';
import { ApolloProvider, useLazyQuery } from '@apollo/client';
import { apolloClient } from "../../config/apollo";
import RelatedPostsSection from '../../components/Blog/RelatedPostsSection';
import { QUERY_GET_POSTS_BY_SEARCH_TERM } from '../../services/wordpressGQL';



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
            searchTerm,
            key: searchTerm
        },
    };
}

export default function SearchResultPage({postsData, paginationData: paginationData_, relatedPosts, searchTerm}) {
    const [posts, setPosts] = useState(postsData);
    const [paginationData, setPaginationData] = useState(paginationData_);
    const [getPosts, { loading, data }] = useLazyQuery(QUERY_GET_POSTS_BY_SEARCH_TERM, {
        //TODO: Sacar este 9 harcodeado
        variables: { first: 9, after: paginationData.endCursor, searchTerm: searchTerm},
        client: apolloClient
    });

    const loadMorePosts = () =>{
        getPosts().then((res)=> {
            setPosts(posts.concat(res.data.posts.nodes));
            setPaginationData(res.data.posts.pageInfo);
        });
    }

  return (
    <ApolloProvider client={apolloClient}>
        <div className="blog">
            <BlogNavbar />
            <div style={{ height: "100px" }}></div>
            <CategoryNav variant="secondary" />
            <CategoryHeader categoryName={"Buscar: " + searchTerm}/>
            <CategoryPostsSection posts={posts} paginationData={paginationData} loadMoreCallback={loadMorePosts} loading={loading}/>
            <RelatedPostsSection posts={relatedPosts}></RelatedPostsSection>
        </div>
    </ApolloProvider>
  )
}
