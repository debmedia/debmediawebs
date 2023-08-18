import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { useTranslation, Trans } from 'next-i18next';

export default function AuthorCard({ variant, author, createdDate, readTime }) {
    const { t } = useTranslation(['blogHome', 'common']);

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
                    {t("AUTHOR_CARD.MINUTES_READ", {count: readTime})}
                </div>
            </div>
        </div>
    );
}
