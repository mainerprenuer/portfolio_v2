import React from 'react'
import {motion} from 'framer-motion'


const Skill = ({name, x, y}) => {

    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
            lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
            xs:text-dark xs:dark:text-light xs:font-bold
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
         <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt:32'>Skills</h2>
         <div className='w-full h-screen relative flex items-center justify-center rounded-full font-semibold bg-circularLight dark:bg-circularDark
         lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
         lg:bg-circularLightLg lg:dark:bg-circularDarkLg
         md:bg-circularLightMd md:dark:bg-circularDarkMd
         sm:bg-circularLightSm sm:dark:bg-circularDarkSm
         '>
            <motion.div
             className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            p-8 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
            lg:p-6 md:p-4 xs:text-xs xs:p-2
            '
            whileHover={{scale:1.05}}>
                web 
            </motion.div>

            <Skill name="TailwindCSS" x="-25vw" y="2vw" />
            <Skill name="ReactJs" x="-12vw" y="-4vw" />
            <Skill name="Technical writing" x="25vw" y="6vw" />
            <Skill name="NestJs" x="5vw" y="14vw" />
            <Skill name="Database Management" x="20vw" y="-15vw" />
            <Skill name="Content Creation" x="30vw" y="-6vw" />
            <Skill name="Linux " x="0vw" y="-19vw" />
            <Skill name="Figma" x="-22vw" y="18vw" />
            <Skill name="Javascript" x="19vw" y="20vw" />
            <Skill name="Mobile Development" x="-29vw" y="-11vw" /> 
            <Skill name="NextJs" x="-15vw" y="9vw" />
            <Skill name="Typescript" x="15vw" y="-1vw" />
            <Skill name="Problem Solving" x="-19vw" y="-24vw" /> 
         </div>
    </>
  )
}

export default Skills