import Image from "next/image";
import React from "react";
import { Badge } from "react-bootstrap";
import { Link } from "next-translate-routes";
import AuthorCard from "../AuthorCard";

const imageUrl = "https://blog.debmedia.com/wp-content/uploads/2023/04/mejores-practicas-de-autoservicio.jpg";
const category = "Novedades";

export default function LatestNewsCard({ post, compact }) {
    return (
        <div className={`latestNewsCard ${compact && "compact"}`}>
            <Link href={post.link}>

            <a className="reset-a">
            <Image src={imageUrl} layout="fill" objectFit="cover" alt={post.title} style={{ zIndex: "-10" }}></Image>
            <Badge bg="primary">{category}</Badge>
            <h3
                className="title"
                dangerouslySetInnerHTML={{
                    __html: post.title.rendered,
                }}></h3>
            {!compact && (
                <>
                    <p
                        className="excerpt my-1"
                        dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered,
                        }}></p>
                        <div className="debLink mb-3">
                            Leer mas <i className="bi bi-caret-right"></i>
                        </div>
                </>
            )}
            <AuthorCard variant="white"></AuthorCard>
            </a>
            </Link>
        </div>
    );
}
