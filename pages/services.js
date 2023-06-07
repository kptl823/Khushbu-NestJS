import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import React from 'react';
import Script from 'next/script'
import Footer from "../components/Footer";
import backgroundImage from '../public/images/img.png';
const isProd = process.env.NODE_ENV === 'production';

export default function Home() {
  return (

  <div>

    <div className={utilStyles.container} style={{
    background: `url(${ isProd ?
    '/Khushbu-NextJS': ''
    }/images/img.png) no-repeat center center fixed`,backgroundSize: 'cover',}}>
      <Head>
        <title>MyWebClass.org</title>
        <link rel="icon" href="/favicon.ico" />
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
      </Head>

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
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>

<main className={utilStyles.main}>
  <section className={utilStyles.hero}>
 <div className={utilStyles.heroTitle}> The services that MyWebClass.org offers to support their mission could include professional development and customized training and support</div>
  <div className={utilStyles.heroText}>
        <h1>Professional development </h1>
        <div> Professional development can be a valuable service for educators who want to learn more about Agile and Lean principles and how to implement them in their classrooms. This service can include workshops, webinars, conferences, and other training opportunities that provide educators with the knowledge and skills needed to successfully adopt these principles. </div>
    </div>
    <div className={utilStyles.heroText}>
      <h1>Customized training and support</h1>
     <div>Customized training and support can be tailored to the specific needs of schools and educators. This service can involve working closely with teachers and administrators to design and implement Agile and Lean practices that align with their teaching goals and learning objectives. This service may also include ongoing support and coaching to ensure that educators feel confident and competent in implementing these practices.</div>

</div>
</section>
</main>

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