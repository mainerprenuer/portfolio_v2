import React from 'react'
import {motion} from 'framer-motion'


const Skill = ({name, x, y}) => {

    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light
            lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs: bg:transparent xs:dark:bg-transparent
            '
            whileHover={{scale:1.09}}
            initialScale={{x:0,y:0}}
            whileInView={{x:x, y:y,transition:{duration:1.5} }}
            viewport={{once:true}}
            >
                {name} 
            </motion.div>
    )
}

const Skills = () => {
  return (
    <>
         <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl mt:32'>Skills</h2>
         <div className='w-full h-screen relative flex items-center justify-center rounded-2 bg-circularLight dark:bg-circularDark'>
            <motion.div
             className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            p-8 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
            lg:p-6 md:p-4 xs:text-xs xs:p-2
            '
            whileHover={{scale:1.05}}>
                web 
            </motion.div>

            <Skill name="React" x="25vw" y="-19vw" />
            <Skill name="NextJs" x="22vw" y="-9vw" />
            <Skill name="NestJs" x="20vw" y="6vw" />
            <Skill name="Database Management" x="-7vw" y="-0vw" />
            <Skill name="Tailwind CSS" x="-16vw" y="15vw" />
            <Skill name="Figma" x="25vw" y="-9vw" />
            <Skill name="Problem Solving" x="-5vw" y="-19vw" />
            <Skill name="Javascript" x="-5vw" y="-6vw" />
            <Skill name="Linux" x="-25vw" y="18vw" />
            <Skill name="Mobile Development" x="-17vw" y="8vw" />
            <Skill name="Technical writing" x="-22vw" y="18vw" />
         </div>
    </>
  )
}

export default Skills