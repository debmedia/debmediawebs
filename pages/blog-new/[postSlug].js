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
import { getPostBySlug, getPosts } from '../../services/wordpressGQL';
import PostBody from '../../components/Blog/Post/PostBody';

export async function getStaticPaths() {
    // const posts = await getPosts({first: 1});
    return {
      paths: [
        // { params: { postSlug: posts[0].slug } },
      ],
      fallback: 'blocking',
    }
  }

export async function getStaticProps({ locale, params }) {
    const post = await getPostBySlug(params.postSlug);
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
      <div className="blog">
          <BlogNavbar />
          <div style={{ height: "89px" }}></div>
          <CategoryNav variant="secondary" />
          <PostBreadcrumbs
              className="d-none d-sm-block"
              crumbs={[
                  { key: 1, href: "/blog-new", label: "Home" },
                  { key: 1, active: true, label: postData.title },
              ]}></PostBreadcrumbs>
          <PostHeader post={postData} />
          <PostBody post={postData}/>
          <Container className="mt-5">
              <Accordion>
                  <Accordion.Item eventKey="0">
                      <Accordion.Header>Post Data</Accordion.Header>
                      <Accordion.Body className="py-1">
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
  );
}
