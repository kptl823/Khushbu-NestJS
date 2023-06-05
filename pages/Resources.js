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
    '/project-2-team-kks': ''
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
   <div className={utilStyles.hero}>
  <section className={utilStyles.heroTitle}>

     <div className={utilStyles.heroText}>
        <h1 className={utilStyles.h1}>Article </h1>
        <div> Academic articles can provide a wealth of information on research-based strategies and practices for incorporating Agile and Lean principles into the classroom. These articles can be written by educators, researchers, and experts in the field and can cover a range of topics such as project-based learning, continuous improvement, and collaboration.</div>
    </div>
    <div className={utilStyles.heroText}>
      <h1 className={utilStyles.h1}>Downloadable  guides</h1>
     <div>Downloadable guides can be a practical and useful resource for educators who want to implement Agile and Lean principles in their classrooms. These guides can offer step-by-step instructions, templates, and examples of best practices for activities such as agile retrospectives, kanban boards, and scrum meetings. They can also include tips on how to adapt these practices to different age groups and subject areas.</div>
    </div>


</section>


</div>
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