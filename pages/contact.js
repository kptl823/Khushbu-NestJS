import * as React from 'react';
import * as Form from '@radix-ui/react-form';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Script from 'next/script';
import Footer from "../components/Footer";
import ReactDOM from 'react-dom/client';
import SignUpForm from "../components/signup-form";
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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@radix-ui/colors@0.1.5/blackA.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@radix-ui/colors@0.1.5/violet.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@radix-ui/colors@0.1.5/mauve.css" />

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
<SignUpForm />
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
