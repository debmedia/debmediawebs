import React, { useState, useEffect } from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import PostCard from "../PostCard";
import { useLazyQuery } from "@apollo/client";
import { QUERY_GET_POSTS } from "../../../services/wordpressGQLQueries";
import { useTranslation, Trans } from 'next-i18next';
import { Link } from "next-translate-routes";
import { LinkText } from "../../LinkText";
import { SocialIcon } from "react-social-icons";

export default function PostsSection({ posts: posts_, paginationData: paginationData_ }) {
    const { t } = useTranslation(['blogHome', 'common']);
    const [posts, setPosts] = useState(posts_);
    const [paginationData, setPaginationData] = useState(paginationData_);
    const [getPosts, { loading, data }] = useLazyQuery(QUERY_GET_POSTS, {
        //TODO: Sacar este 9 harcodeado
        variables: { first: 9, after: paginationData.endCursor },
    });
    const handleClick = () => {
        getPosts().then((res)=> {
            setPosts(posts.concat(res.data.posts.nodes));
            setPaginationData(res.data.posts.pageInfo);
        });
    };

    useEffect(()=>{
        setPosts(posts_);
    }, [posts_])

    return (
        <Container className="post-section mt-5">
            {Array.isArray(posts) && posts.length > 0 && (
                <>
                    <div className="grid">
                        {posts.map((post) => (
                            <PostCard key={post.databaseId} post={post}></PostCard>
                        ))}
                    </div>
                    <div className="button-container mt-4">
                        {paginationData.hasNextPage && (
                            <Button
                                disabled={loading}
                                onClick={!loading ? handleClick : null}
                                className="px-4"
                                variant="secondary">
                                {loading ? (
                                    <Spinner animation="border" role="status" size="sm"></Spinner>
                                ) : (
                                    t("common:SEE_MORE")
                                )}
                            </Button>
                        )}
                    </div>
                </>
            )}
            {Array.isArray(posts) && posts.length == 0 && (
                <>
                    <p className="text-center h2 px-5 lh-base" >
                        <Trans t={t} i18nKey="POSTS_SECTION.NO_POSTS_MESSAGE">
                            0
                            <LinkText href={"/"}>
                                <a>0</a>
                            </LinkText>
                        </Trans>
                    </p>
                    <div className="mt-5" style={{display: "flex", gap: "4rem", justifyContent: "center"}}>
                        <SocialIcon style={{ height: "100px", width: "100px" }} url="https://www.instagram.com/wearedebmedia_br/"></SocialIcon>
                        <SocialIcon style={{ height: "100px", width: "100px" }} url="https://www.linkedin.com/company/93208577/"></SocialIcon>
                    </div>
                </>

            )}
        </Container>
    );
}
