// pages/server-sitemap-index.xml/index.tsx
import { getServerSideSitemapLegacy } from "next-sitemap";
import * as wordpress from "../../services/wordpress";
import { BLOG_ABSOLUTE_URL } from "../../constants/urls";

export const getServerSideProps = async (ctx) => {
    try {
        const data = await wordpress.getAllPagesForSitemap();
        let pagesUrls = data.posts.map((post) => {
            return {
                loc: post.link, // Absolute url
                lastmod: new Date(post.modified_gmt).toISOString(),
            };
        });
        // filtramos solo las paginas del blog
        pagesUrls = pagesUrls.filter((url) =>
            url.loc.startsWith(BLOG_ABSOLUTE_URL)
        );
        console.log(
            "[Blog Sitemap] number of pages indexed: ",
            pagesUrls.length
        );
        return getServerSideSitemapLegacy(ctx, pagesUrls);
    } catch (err) {
        console.error("[Blog Sitemap] Error creating blog sitemap.xml:", err);
        return getServerSideSitemapLegacy(ctx, []);
    }
};

export const revalidate = 60;
// Default export to prevent next.js errors
export default function SitemapIndex() {}
