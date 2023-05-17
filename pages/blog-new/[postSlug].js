import { useRouter } from 'next-translate-routes'
import React from 'react'
import BlogNavbar from '../../components/Blog/BlogNavbar';
import CategoryNav from "../../components/Blog/CategoryNav";
import { apolloClient } from "../../config/apollo";
import { gql, ApolloProvider } from "@apollo/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PostBreadcrumbs from '../../components/Blog/Post/PostBreadcrums'


export async function getStaticPaths() {
    return {
      paths: [
        { params: { postSlug: 'second-post' } },
      ],
      fallback: true,
    }
  }

export async function getStaticProps({ locale }) {
    //TODO: sacar esto a un servicio con las queries
    const res = await apolloClient.query({
        query: gql`
            query getPost {
                    post(id: "experiencias-digitales", idType: SLUG) {
                        content
                        dateGmt
                        excerpt
                        modifiedGmt
                        status
                        title
                        link
                        databaseId
                        author {
                            node {
                                databaseId
                                name
                                avatar {
                                    url
                                }
                            }
                        }
                        categories {
                            edges {
                                isPrimary
                                node {
                                    name
                                    databaseId
                                    slug
                                    parent {
                                        node {
                                            databaseId
                                            name
                                            slug
                                        }
                                    }
                                }
                            }
                        }
                        featuredImage {
                            node {
                                mediaItemUrl
                                title
                            }
                        }
                    }
                }
        `,
    });

    return {
        props: {
            ...(await serverSideTranslations(locale, ["blogHome", "components", "common"])),
            postData: res.data.post,
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
        <PostBreadcrumbs crumbs={[{href: "/blog-new", label: "Home"}, {active: true, label: postData.title}]}></PostBreadcrumbs>
        <div>PostPage</div>
        <pre>{JSON.stringify(postData, null, 2)}</pre>
    </div>
  )
}
