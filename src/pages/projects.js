import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/farmplug.png"
import project2 from "../../public/images/projects/portfolio2.jpg"
import project3 from "../../public/images/projects/portfolio1.jpg"
import project4 from "../../public/images/projects/islamia.png"
import project0 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {

    return(
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-12
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>
        
         <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
         rounded-br-3xl xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]
         '/>


        <Link href={link} target="_blank"
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
        >
            <FramerImage src={img} alt={title} className="w-full h-auto" 
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            />
        </Link>

        <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
            <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
            <Link 
                href={link} target="_blank"
                className='hover:underline underline-offset-2'>
            <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
        <Link href={github} target="_blank" className='w-10'>
            <GithubIcon />
        </Link>
        <Link href={link} target="_blank"
        className='ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold
        sm:px-4 sm:text-base
        '
        >
            Visit Project
        </Link>


        </div>
        </div>

        </article>
    )
}

const Project = ({title, type, img, link, github}) => {

    return(
        <article className="w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative xs:p-4
        ">

<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
         dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
         '/>

            <Link href={link} target="_blank"
        className='w-full cursor-pointer overflow-hidden rounded-lg'
        >
            <FramerImage src={img} alt={title} className="w-full h-auto" 
            whileHover={{scale:1.05}}
            transition={{duration:0.5}}
            priority
              sizes='(max-width: 768px) 100vw,
              (max-width: 1024px) 50vw,
              50vw'
            />
        </Link>

        <div className='w-full flex flex-col items-start justify-between mt-4'>
            <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
            <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
            <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
        <Link href={github} target="_blank" className='w-8 md:w-6'>
            <GithubIcon />
        </Link>
        <Link href={link} target="_blank"
        className='text-lg font-semibold underline md:text-base'
        >
            Visit
        </Link>

        </div>
        </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
        <Head>
        <title>Mousty Mainer</title>
        <meta name="Mousty Mainer" content="My Developer's Journey" />
      </Head>
      <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Knowledge is power!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>

            <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-y-24 sm:gap-x-0'>
                <div className='col-span-12'>
                    <FeaturedProject 
title="Farm Products Ordering and Delivery System"
img={project1}
summary="Our app connects you with farmers and suppliers to help you order fresh, high-quality farm produce.
         We use AI to provide personalized recommendations, optimize delivery routes, and improve overall efficiency.
         You can easily place orders, track delivery, and get real-time support using our app. It's a convenient and 
         user-friendly platform that ensures you get the best farm produce, delivered to your doorstep."
github="https://github.com/mainerprenuer/farmPlug"
link="https://farm-plug.vercel.app"
type="Featured Project"
                    />

                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project 
title="Campaign Social Network"
img={project2}
github="https://github.com/mainerprenuer/malami-connect"
link=""
type="Featured Project"
                    />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project 
title="Islamiyya"
img={project4}
github="https://github.com/mainerprenuer/islamiyya"
link="https://mainerprenuer.github.io/islamiyya/"
type="Featured Project"
                    />
                </div>
                <div className='col-span-12'>
                    <FeaturedProject 
title="Party Agent Information Management System"
img={project3}
summary="Generally, the goal of an AIMS is
to provide a centralized platform
for managing and tracking
information related to agents,
such as their performance,
training, names, addresses, and
identification numbers, and to
record voting results, as well as
tools for data analysis and
reporting."
github="https://github.com/mainerprenuer/election_data"
link="https://apcaims.org"
type="Featured Project"
                    />

                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project 
title="Crypto Screener Application"
img={project0}
github="https://github.com/mainerprenuer"
link=""
type="Featured Project"
                    />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project 
title="Crypto Screener Application"
img={project0}
github="https://github.com/mainerprenuer"
link=""
type="Featured Project"
                    />
                </div>
            </div>
            </Layout>
        </main>
    </>
  )
}

export default projects