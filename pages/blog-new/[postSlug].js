import { useRouter } from 'next-translate-routes'
import React from 'react'
import BlogNavbar from '../../components/Blog/BlogNavbar';
import CategoryNav from "../../components/Blog/CategoryNav";
import { apolloClient } from "../../config/apollo";
import { gql, ApolloProvider } from "@apollo/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PostBreadcrumbs from '../../components/Blog/Post/PostBreadcrums'
import PostHeader from '../../components/Blog/Post/PostHeader';
import {Container, Accordion } from "react-bootstrap";
import { getPostBySlug } from '../../services/wordpressGQL';

export async function getStaticPaths() {
    return {
      paths: [
        { params: { postSlug: 'experiencias-digitales' } },
      ],
      fallback: true,
    }
  }

export async function getStaticProps({ locale }) {
    const post = await getPostBySlug("experiencias-digitales");
    return {
        props: {
            ...(await serverSideTranslations(locale, ["blogHome", "components", "common"])),
            postData: post,
        },
    };
}

export default function PostPage({postData}) {
    const router = useRouter();
  return (
    <div className='blog'>
        <BlogNavbar/>
        <div style={{ height: "89px" }}></div>
        <CategoryNav variant="secondary"/>
        <PostBreadcrumbs className="d-none d-sm-block" crumbs={[{href: "/blog-new", label: "Home"}, {active: true, label: postData.title}]}></PostBreadcrumbs>
        <PostHeader post={postData}/>
        <Container className="mt-5">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Post Data</Accordion.Header>
                                <Accordion.Body className='py-1'>
                                    <div
                                        style={{
                                            minHeight: "3rem",
                                            padding: "0.5rem",
                                            backgroundColor: "black",
                                            color: "white",
                                            borderRadius: "0.5rem",
                                        }}>
                                        <pre>{JSON.stringify(postData, null, 2)}</pre>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Container>
    </div>
  )
}
