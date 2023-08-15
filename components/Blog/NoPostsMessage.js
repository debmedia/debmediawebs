import React from "react";
import { useTranslation, Trans } from "next-i18next";
import { LinkText } from "../LinkText";
import { SocialIcon } from "react-social-icons";
import { Container } from "react-bootstrap";

export default function NoPostsMessage({ className }) {
    const { t } = useTranslation(["blogHome", "common"]);
    return (
        <Container className={className + " my-5"}>
            <p className="text-center h2 px-5 lh-base">
                <Trans t={t} i18nKey="NO_POSTS_MESSAGE.MESSAGE">
                    0
                    <LinkText href={"/"}>
                        <a>0</a>
                    </LinkText>
                </Trans>
            </p>
            <div className="mt-5" style={{ display: "flex", gap: "4rem", justifyContent: "center" }}>
                <SocialIcon
                    style={{ height: "100px", width: "100px" }}
                    url={t("NO_POSTS_MESSAGE.INSTAGRAM_URL")}></SocialIcon>
                <SocialIcon
                    style={{ height: "100px", width: "100px" }}
                    url={t("NO_POSTS_MESSAGE.LINKEDIN_URL")}></SocialIcon>
            </div>
        </Container>
    );
}
