import script from 'next/script';
import Head from 'next/head';
import Image from "next/image";
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import React from 'react';
import Script from 'next/script';
import Footer from "../components/Footer";
import Cookie from '../components/cookie';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { useTranslation } from 'react-i18next';
import backgroundImage from '../public/images/img.png';
const isProd = process.env.NODE_ENV === 'production';

function Home() {
 const { t } = useTranslation()
  return (
  <div>
    <div className={utilStyles.container} >
    <div className={utilStyles.background} style={{
    background: `url(${ isProd ?
    '/Khushbu-NextJS': ''
    }/images/img.png) no-repeat center center fixed`,backgroundSize: 'cover',}}>
<div className={utilStyles.background}>
      <Head>
        <title>MyWebClass.org</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
<script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YWK77S2GF6"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YWK77S2GF6', { page_path: window.location.pathname });
          `,
          }}
        ></script>
<Cookie />
      {/* Rest of your code */}
  <header className={utilStyles.header}>
    <nav className={utilStyles.navbar}>
      <ul className={utilStyles.navlist}>
        <li className={utilStyles.navitem}>
          <Link href="/" className={utilStyles.navlink}>
            Homepage
          </Link>
        </li>
        <li className={utilStyles.navitem}>
          <Link href="/About" className={utilStyles.navlink}>
            About
          </Link>
        </li>
        <li className={utilStyles.navitem}>
          <Link href="/Resources" className={utilStyles.navlink}>
            Resources
          </Link>
        </li>
        <li className={utilStyles.navitem}>
          <Link href="/services" className={utilStyles.navlink}>
            Services
          </Link>
        </li>
         <li className={utilStyles.navitem}>
          <Link href="/blog" className={utilStyles.navlink}>
            Blog
          </Link>
        </li>
        <li className={utilStyles.navitem}>
          <Link href="/contact" className={utilStyles.navlink}>
            {t('about')}
          </Link>
        </li>
      </ul>
    </nav>
  </header>
<main className={utilStyles.main}>
   <section className={utilStyles.hero}>
    <div className={utilStyles.heroText1}>
    <div>
      <h1 className={utilStyles.h1}>Welcome to Mywebclass.org</h1>
      <div className={utilStyles.h1tag}>
      Welcome to Progressive Education where learning has been more accessible. Our platform offers a wide range of courses and resources for students of all ages, backgrounds, and interests.we  are online learning platform offers a flexible and convenient way to study, allowing you to learn at your own pace and on your own schedule. You can access our courses from anywhere in the world, using any device with an internet connection.
      </div>
      <div>We have  team of experienced instructors are committed to providing high-quality education and support to help teachers feel confident and equipped to bring  into their classrooms. so why wait ? Start your journey towards a more innovative and inclusive future for education
      </div>

      <button href="/About" className={utilStyles.button}>
       About US
      </button>
</div>
  </div>
</section>
</main>
</div>
</div>
        </div>
    <Footer />
      </div>
)
}



export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default Home;
