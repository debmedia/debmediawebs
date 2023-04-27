import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

const user = {
    id: 12,
    name: "Camila Acosta",
    url: "https://debmedia.com/",
    description: "",
    link: "https://debmedia.com/blog/author/cacosta/",
    slug: "cacosta",
    avatar_urls: {
        24: "https://secure.gravatar.com/avatar/3aee5f85ee6a8d17d4c7851ccf2d9e6b?s=24&d=mm&r=g",
        48: "https://secure.gravatar.com/avatar/3aee5f85ee6a8d17d4c7851ccf2d9e6b?s=48&d=mm&r=g",
        96: "https://secure.gravatar.com/avatar/3aee5f85ee6a8d17d4c7851ccf2d9e6b?s=96&d=mm&r=g",
    },
    meta: [],
    yoast_head:
        '<!-- This site is optimized with the Yoast SEO plugin v15.2.1 - https://yoast.com/wordpress/plugins/seo/ -->\n<title>Camila Acosta, Author at Debmedia - Blog</title>\n<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />\n<link rel="canonical" href="https://debmedia.com/blog/author/cacosta/" />\n<meta property="og:locale" content="es_ES" />\n<meta property="og:type" content="profile" />\n<meta property="og:title" content="Camila Acosta, Author at Debmedia - Blog" />\n<meta property="og:url" content="https://debmedia.com/blog/author/cacosta/" />\n<meta property="og:site_name" content="Debmedia - Blog" />\n<meta property="og:image" content="https://secure.gravatar.com/avatar/3aee5f85ee6a8d17d4c7851ccf2d9e6b?s=500&#038;d=mm&#038;r=g" />\n<meta name="twitter:card" content="summary" />\n<!-- / Yoast SEO plugin. -->',
    _links: {
        self: [
            {
                href: "https://debmedia.com/blog/wp-json/wp/v2/users/12",
            },
        ],
        collection: [
            {
                href: "https://debmedia.com/blog/wp-json/wp/v2/users",
            },
        ],
    },
};

const postDate = "17 febrero, 2022";
const readTime = "4 minutes read";

export default function AuthorCard({variant}) {
    return (
        <div className={`authorCard ${variant? "variant-" + variant: ""}`}>
                <div md="auto" xs={false}className="authorCard_image-container">
                    <Image
                        className="authorCard_image"
                        src={user.avatar_urls["96"]}
                        alt={user.name}
                        layout="fill"
                        objectFit="cover"></Image>
                </div>
                <div md="auto" xs={false}>
                    <div className="authorCard_name">{user.name}</div>
                    <div className="authorCard_date">
                        {postDate}
                        {" - "}
                        {readTime}
                    </div>
                </div>
        </div>
    );
}
