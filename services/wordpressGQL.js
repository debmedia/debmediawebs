import { apolloClient } from "../config/apollo";
import { LANGS_IDS } from "../constants/blog";
import {
    QUERY_GET_POST_BY_SLUG,
    QUERY_GET_POSTS,
    QUERY_GET_POSTS_SLUGS,
    QUERY_GET_ROOT_CATEGORIES,
    QUERY_GET_CATEGORIES_BY_SLUG,
    QUERY_GET_POSTS_BY_CATEGORY_ID,
    QUERY_GET_POSTS_BY_SEARCH_TERM,
} from "./wordpressGQLQueries";

// Funciones del servicio
export async function getPostBySlug(slug) {
    const res = await apolloClient.query({
        variables: { slug },
        query: QUERY_GET_POST_BY_SLUG,
    });

    return res.data.post;
}


export async function getPosts({first, after}, locale) {
    const res = await apolloClient.query({variables:{first, after, categoryId: LANGS_IDS[locale], }, query: QUERY_GET_POSTS});
    return {
        posts: res.data.posts.nodes,
        pagination: res.data.posts.pageInfo
    }
}

export async function getPostsSlugs({first, after}) {
    const res = await apolloClient.query({variables:{first, after}, query: QUERY_GET_POSTS_SLUGS});
    return {
        posts: res.data.posts.nodes,
        pagination: res.data.posts.pageInfo
    }
}

export async function getAllPostSlugs() {
    let hasNextPage = true;
    let requestsNumber = 0;
    let first = 100;
    let after;
    let allPosts = [];
    // limitamos por las dudas
    const MAX_REQUESTS = 50;
    while (hasNextPage && requestsNumber < MAX_REQUESTS) {
        let {posts, pagination} = await getPostsSlugs({first, after});
        hasNextPage = pagination.hasNextPage;
        after = pagination.endCursor;
        allPosts = allPosts.concat(posts);
        requestsNumber++;
    }
    return allPosts;
}
export async function getRootCategories() {
    const res = await apolloClient.query({query: QUERY_GET_ROOT_CATEGORIES});
    return res.data.categories.nodes;
}

export async function getCategoriesBySlug(slug) {
    const res = await apolloClient.query({variables:{slug}, query: QUERY_GET_CATEGORIES_BY_SLUG});
    return res.data.categories.nodes;
}

export async function getPostByCategoryId({first, after, categoryIn}, locale) {
    const res = await apolloClient.query({variables:{first, after, categoryId: LANGS_IDS[locale], categoryIn}, query: QUERY_GET_POSTS_BY_CATEGORY_ID});
    return {
        posts: res.data.posts.nodes,
        pagination: res.data.posts.pageInfo
    }
}

export async function getPostByCategorySlug({first, after, categorySlug}, locale) {
    const categories = await getCategoriesBySlug(categorySlug);
    if(categories.length === 0) throw new Error(`[getPostByCategory] no category for: ${categorySlug}`);
    return getPostByCategoryId({first, after, categoryIn: [categories[0].databaseId]}, locale);
}

export async function getPostBySearchTerm({first, after, searchTerm}, locale) {
    const res = await apolloClient.query({variables:{first, after, searchTerm, categoryId: LANGS_IDS[locale]}, query: QUERY_GET_POSTS_BY_SEARCH_TERM});
    return {
        posts: res.data.posts.nodes,
        pagination: res.data.posts.pageInfo
    }
}