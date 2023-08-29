import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import article1 from "../../public/images/articles/pagination component in reactjs.jpg"
import article2 from "../../public/images/articles/create loading screen in react js.jpg"
import article3 from "../../public/images/articles/smooth scrolling in reactjs.png"
import { motion, useMotionValue } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const MovingImg = ({title, img, link}) => {

    // moving cursor to display img
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event) {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event) {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

    return(
        <Link href={link} target='_blank'
        
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}

        >
                <h2 className='capitalize text-xl font-semibold hover:underline'>
                    {title}
                </h2>
                <FramerImage
                style={{ x:x, y:y }}
                initial={{opacity:0}}
                whileInView={{opacity:1, transition:{duration:0.2}}}


                ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'/>
            </Link>
    )
}

const Article = ({img, title, date, link}) => {

    return(
        <motion.li
        initial={{y:200}}
        whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
        viewport={{once:true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center
        justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4 dark:bg-dark dark:text-light dark:border-light 
        sm:flex-col
        '>
            <MovingImg title={title} img={img} link={link}/>
            <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

const FeaturedArticle = ({img, title, time, summary, link}) => {

    return(
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark
        dark:bg-dark dark:text-light dark:border-light rounded-2xl'>
            <Link href={link} target="_blank"
        className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
        >

<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
         dark:bg-light rounded-br-3xl
         '/>

            <FramerImage src={img} alt={title} className="w-full h-auto"
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            priority
              sizes='(max-width: 768px) 100vw,
              (max-width: 1024px) 50vw,
              50vw'
            />
        </Link>
        <Link href={link} target='_blank'>
            <h2 className='capitalize text-2xl font-bold mt-4 my-2 hover:underline xs:text-lg'>{title}</h2>
        </Link>
        <p className='text-sm mb-2'>{summary}</p>
        <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
        </li>
    )
}

const articles = () => {
  return (
    <>
        <Head>
        <title>Mousty Mainer</title>
        <meta name="Mousty Mainer" content="My Developer's Journey" />
      </Head>
      <TransitionEffect />
        <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
            <Layout className='pt-16'>
                <AnimatedText text="words can change the world!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
                <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                    <FeaturedArticle 
                        title="Build A Custom Pagination Component In Reactjs From Scratch"
                        summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                        time="9 min read"
                        img={article1}
                        link="/"
                    />
                    <FeaturedArticle 
                        title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
                        summary="Learn how to create stunning loading screens in React with 3 different methods. 
                        Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
                        Improve the user experience."
                        time="10 min read"
                        img={article2}
                        link="/"
                     />
                </ul>
                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32 dark:text-light'>All Articles</h2>
                <ul>
                    <Article 
                        title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        date="July 17, 2023"
                        img={article3}
                        link="/"
                    />
                    <Article 
                        title="Understanding the Role of Flutter in the Digital Age"
                        date="Feb 26, 2023"
                        img={article3}
                        link="/"
                    />
                    <Article 
                        title="THE COMPLEX WORLD OF TECHNOLOGY: Exploring Programming and Software Engineering."
                        date="Feb 19, 2023"
                        img={article3}
                        link="/"
                    />
                    <Article 
                        title="How to Get Your First Job as a Self-Taught Programmer"
                        date="Mar 22, 2023"
                        img={article3}
                        link="/"
                    />
                    <Article 
                        title="Understanding CRUD: The Key to Mastering Programming Concepts and Building Better Apps"
                        date="March 22, 2023"
                        img={article2}
                        link="/"
                    />
                </ul>
            </Layout>
        </main>
    </>
  )
}

export default articles