import React from "react";
import { Container } from "react-bootstrap";
import LatestNewsCard from "./LatestNewsCard";
import { useTranslation, Trans } from 'next-i18next';

export default function LatestNewsSection({ posts }) {
    const { t } = useTranslation(['blogHome', 'common']);
    return (
        <Container as={"section"} className="latestNewsSection">
            {posts.length > 1 &&
            <>
                <div>
                    <h2 className="text-center my-3 my-md-5">{t("LATEST_NEWS_SECTION.TITLE")}</h2>
                </div>
                <div className="latestNewsSection_grid">
                    {posts.map((post, index) => {
                        const compact = !(index % 6 === 0 || index - (4 % 6) === 0);
                        return (
                            <div key={post.databaseId} className={compact ? "" : "row-span-2"}>
                                <LatestNewsCard post={post} compact={compact} />
                            </div>
                        );
                    })}
                </div>
            </>
            }
        </Container>
    );
}
