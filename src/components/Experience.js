import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'


const Details = ({ position, company, companyLink, time, address, work }) => {
        const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
            target='_blank'
            className='text-primary dark:text-primaryDark capitalize'
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef (null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64 '>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

<motion.div
    style={{scaleY: scrollYProgress}}
    className='absolute left-9 top-8 w-[4px] h-full bg-dark origin-top dark:bg-light
    md:w-[2px] md:left-[30px] xs:left-[20px]
    '/>

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                    position="Lead Software Engineer" 
                    company="Micon Inc." 
                    companyLink="http://abokintech.vercel.app"
                    time="2023-Present" 
                    address="Remote, NGR" 
                    work="I'm working at the intersection of design, brand, code, strategy and content; 
                    helping organizations bring their concepts and products to life… To make people’s lives better. 
                    I believe learning is a recursive function."

                />
                        
                <Details 
                    position="Software Engineer (CTO)" 
                    company="Hexelan Consulting Ltd" 
                    companyLink="http://hexelan.tech/"
                    time="2022-2023" 
                    address="Abuja, NGR" 
                    work="I developed and launched new data
                    collection software
                    products/applications, meeting
                    user and stakeholder needs, as a
                    key software engineer.
                    I created data visualization
                    tools that aided in conveying
                    critical information of the
                    collected data more effectively
                    and convincingly."
                />

                <Details 
                    position="Web Development Facilitator (Volunteer)" 
                    company="Kebbi IT Hub" 
                    companyLink="https://www.africatechschools.com/school/kebbi-innovation-and-tech-hub/"
                    time="2022-2022" 
                    address="Birnin kebbi, NGR"
                    work="I designed and delivered effective
                    web development training programs,
                    including curricula design, course
                    materials, and engaging
                    instruction that facilitated
                    students and employees in skill
                    development and goal achievement."
                />

                <Details 
                    position="IT Consultant" 
                    company="Zamson Global Resources" 
                    companyLink="/"
                    time="2021-2022" 
                    address="Sokoto, NGR" 
                    work="I led IT projects (system upgrades,
                        new software implementations and
                        network expansions) to successful
                        completion on time and within
                        budget."
                />
                <Details 
                    position="Deputy Director ICT" 
                    company="Khadimiyya For Justice And Development Initiatives." 
                    companyLink="/"
                    time="2020-2021" 
                    address="Birnin Kebbi, Abuja, NGR" 
                    work="I coached, mentored, and supported
                    IT staffs, identified development
                    opportunities, provided
                    feedback, and recognized
                    performance. I also developed data visualization
                    systems to help communicate key
                    messages."
                />
                <Details 
                    position="Finance Assistant" 
                    company="Opay" 
                    companyLink="https://opay.ng/"
                    time="2019-2020" 
                    address="Sokoto, NGR" 
                    work="I designed online invoicing system
                    to automate financial processes
                    and reduce manual work, cutting
                    down processing time.
                    
                    I improved financial reporting by
                    presenting data clearly and
                    concisely, empowering management
                    to make informed decisions.
                    I implemented new policies around
                    expense reimbursement that
                    require receipts and approvals
                    for all expenses."
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience