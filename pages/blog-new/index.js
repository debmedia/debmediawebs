import React from 'react'
import BlogNavbar from '../../components/Blog/BlogNavbar';
import wpApi from '../../config/axios'
import { WP_POSTS_URL } from '../../constants/urls'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// export async function getStaticProps(context) {
//     try {
//         const res = await wpApi.get(WP_POSTS_URL);
//         return {
//           props: {
//             postsData: res.data
//           },
//         }
//     } catch (error) {
//         console.log('error lpm', error);
//         throw new Error("Error buscando los datos de wp", error);
//     }
//   }

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['blogHome','components','common'])),
      },
    };
  }

export default function BlogHome({postsData}) {
  return (
    <>
        <BlogNavbar></BlogNavbar>
        <div>
            <div style={{minHeight: "900px", paddingTop: "100px"}}>BlogHome </div>
        </div>
    </>
  )
}
