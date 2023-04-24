import axios from "axios";
import { WP_REST_API_BASE_URL, WP_POST_URL } from "../constants/urls";
// TODO: Ver de usar fetch directamente o otra manera para aprovechar el catching de NextJS
const api = axios.create({
    baseURL: WP_REST_API_BASE_URL,
});

export const getPagesForSitemap = async (page) => {
    const res = await api.get(WP_POST_URL, {
        params: {
            _fields: "id,link,modified_gmt",
            per_page: 100,
            page,
        },
    });
    return {
        posts: res.data,
        totalPages: parseInt(res.headers["x-wp-totalpages"]),
    };
};
export const getAllPagesForSitemap = async () => {
    const data = await getPagesForSitemap(1);
    const promises = [];
    for (let i = 2; i <= data.totalPages; i++) {
        const promise = await getPagesForSitemap(i);
        promises.push(promise);
    }
    let responses = [];
    responses.push(data);
    responses = responses.concat(await Promise.all(promises));
    let allPosts = responses.flatMap((data) => {
        return data.posts.map((post) => {
            return post;
        });
    });
    return {
        posts: allPosts,
        totalPosts: allPosts.length,
        totalPages: data.totalPages,
    };
};
