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

<h1 className={utilStyles.h1}>Meet Our Team:</h1>
 <div className={utilStyles.heroTitle}>

 <div className={utilStyles.heroText}>
        <h1>Professor: Keith William </h1>

         <h1> Instructor: </h1>
          <p>              Shivam Patil
                           Khushbu Patel
                             Kajol Patel
           </p>

  </div>

     <div>Our team of experts includes highly qualified professors and instructors who are passionate about promoting Agile and Lean principles in education. With years of experience in teaching and educational research, our team is dedicated to helping educators and schools revolutionize the way they teach and learn.</div>

<p>Our professors and instructors offer customized training and support packages, as well as collaboration and networking opportunities for educators and schools. They are committed to providing practical, evidence-based resources and strategies to help educators improve student-centered learning, foster collaboration and adaptability, and drive continuous improvement in the classroom.</p>
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