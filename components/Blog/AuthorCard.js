import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

export default function AuthorCard({ variant, author, createdDate, readTime }) {
    return (
        <div className={`authorCard ${variant ? "variant-" + variant : ""}`}>
            <div md="auto" className="authorCard_image-container">
                {author?.avatar?.url && (
                    <Image
                        className="authorCard_image"
                        src={author?.avatar.url}
                        alt={author?.name}
                        layout="fill"
                        objectFit="cover"></Image>
                )}
            </div>
            <div md="auto">
                <div className="authorCard_name">{author?.name}</div>
                <div className="authorCard_date">
                    {new Date(createdDate).toLocaleDateString()}
                    {" - "}
                    {readTime} minutes read
                </div>
            </div>
        </div>
    );
}
