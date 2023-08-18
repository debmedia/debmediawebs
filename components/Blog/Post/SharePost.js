import { useRouter } from "next-translate-routes";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    PinterestIcon,
    PinterestShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from "react-share";
import { WEB_BASE_URL } from "../../../constants/urls";
import { useTranslation, Trans } from 'next-i18next';

export default function SharePost() {
    const { t } = useTranslation(['blogHome', 'common']);
    const { locale, asPath } = useRouter();
    const urlToShare = WEB_BASE_URL + "/" + locale + asPath;
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col xs="auto">
                    <p className="text-center h4">
                    {t("SHARE_POST.TITLE")}
                    </p>
                    </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs="auto" className="py-1">
                    <FacebookShareButton url={urlToShare}>
                        <FacebookIcon round={true} size={48}/>
                    </FacebookShareButton>
                </Col>
                <Col xs="auto" className="py-1">
                    <TwitterShareButton url={urlToShare}>
                        <TwitterIcon round={true} size={48}/>
                    </TwitterShareButton>
                </Col>
                <Col xs="auto" className="py-1">
                    <PinterestShareButton url={urlToShare}>
                        <PinterestIcon round={true} size={48}/>
                    </PinterestShareButton>
                </Col>
                <Col xs="auto" className="py-1">
                    <LinkedinShareButton url={urlToShare}>
                        <LinkedinIcon round={true} size={48}/>
                    </LinkedinShareButton>
                </Col>
                <Col xs="auto" className="py-1">
                    <WhatsappShareButton url={urlToShare}>
                        <WhatsappIcon round={true} size={48}/>
                    </WhatsappShareButton>
                </Col>
            </Row>
        </Container>
    );
}
