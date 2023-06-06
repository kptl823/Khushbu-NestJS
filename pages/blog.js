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
<h1 className={utilStyles.h1}>Blogs</h1>
 <div className={utilStyles.heroText}>
        <a href="https://medium.com/laboratoria/the-agile-classroom-embracing-an-agile-mindset-in-education-ae0f19e801f3">Embracing the Agile Mindset in Education: A Paradigm Shift </a>
<div>A mode of thinking known as the agile mentality places a strong emphasis on
teamwork, flexibility, and adaptation. Adopting an agile mentality may aid
instructors and students in navigating the quickly evolving technological world and
preparing for the workplace of the future. Adopting the agile mindset when it
comes to AI education websites entails moving away from a conventional, top-
down approach and toward a more collaborative, iterative approach that puts the
needs of students at the center</div>
    </div>
    <div className={utilStyles.heroText}>
      <a href="https://leanconstruction.org/learning/classroom-learning/" >Lean Principles in the Classroom: Maximizing Efficiency and Learning Outcomes</a>
     <div>Value identification is the first phase in the lean approach. This involves figuring
out what benefits the client. This entails determining which educational objectives
are most crucial for pupils in the context of an AI education website. Teachers can
make sure that students are getting the most out of their learning experience by
concentrating on the most crucial outcomes.</div>
</div>
   <div className={utilStyles.heroText}>
      <a href="https://www.pewtrusts.org/en/trend/archive/spring-2020/putting-neuroscience-in-the-classroom-how-the-brain-changes-as-we-learn" >The Role of Neuroscience in Shaping Modern Education Practices</a>
     <div>The study of the nervous system, which includes the brain, and how it influences
cognition, learning, and behavior is known as neuroscience. Recent developments
in neuroscience have provided fresh perspectives on how the brain functions and
how learning takes place. These revelations might influence contemporary
educational methods in a variety of ways, including:
Understanding how the brain learns: Neuroscience studies have proven that the
brain continually adapts to new experiences by changing and changing. This has
improved our knowledge of how learning happens and the best kinds of learning
experiences.
</div>
</div>
   <div className={utilStyles.heroText}>
      <a href="https://ts2.space/en/ai-powered-learning-preparing-students-for-the-future/" >Preparing Students for the AI-Driven World: Essential Skills for Success</a>
     <div>It is crucial to provide students with the fundamental competencies they will
require for success in this quickly changing environment as AI technology
becomes more and more prevalent in society
</div>
</div>
   <div className={utilStyles.heroText}>
      <a href="https://www.myenglishpages.com/blog/personalized-learning-definition/" >Personalized Learning Plans: Empowering Students through Adaptive Education</a>
     <div>Personalized learning plans are a teaching approach that seeks to empower
students by providing them with a customized learning experience tailored
to their individual needs and abilities. Rather than taking a one-size-fits-all
approach, personalized learning plans adapt to each student's learning style,
interests, and pace.
</div>
</div>
<div className={utilStyles.heroText}>
      <a href="https://www.edutopia.org/project-based-learning-student-motivation" >Project-Based Learning: Engaging Students in Real-World Problem Solving</a>
     <div>Project-Based Learning (PBL) is a method of teaching where students work
together on an interdisciplinary project to solve a real-world issue. The 21st-
century success skills of critical thinking, problem-solving, and decision-making
are fostered in PBL through actively engaging students in these activities
</div>
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