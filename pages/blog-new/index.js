import React from 'react'
import BlogNavbar from '../../components/Blog/BlogNavbar';
import wpApi from '../../config/axios'
import { WP_POSTS_URL } from '../../constants/urls'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CategoryNav from '../../components/Blog/CategoryNav';
import HeroPostCard from '../../components/Blog/HeroPostCard';
import testPosts from '../../json/testPosts_no_comitear.json';
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
        postsData: testPosts,
      },
    };
  }

export default function BlogHome({postsData}) {
  return (
    <div className='blog'>
        <BlogNavbar></BlogNavbar>
        <div style={{height: "110px"}}></div>
        <CategoryNav/>
        <HeroPostCard post={postsData[0]}/>
        <div>
            <div style={{minHeight: "900px", paddingTop: "100px"}}>BlogHome </div>
        </div>
    </div>
  )
}
