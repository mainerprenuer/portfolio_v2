import React from 'react'
import {motion} from 'framer-motion'


const Skill = ({name, x, y}) => {

    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            p-8 shadow-dark cursor-pointer
            '
            whileHover={{scale:1.09}}
            initialScale={{x:0,y:0}}
            whileInView={{x:x, y:y}}
            transition={{duration:1.5}}
            viewport={{once:true}}
            >
                {name} 
            </motion.div>
    )
}

const Skills = () => {
  return (
    <>
         <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
         <div className='w-full h-screen relative flex items-center justify-center rounded bg-circularLight'>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            p-8 shadow-dark cursor-pointer absolute
            '
            whileHover={{scale:1.05}}>
                web 
            </motion.div>

            <Skill name="React" x="50vw" y="-18vw" />
            <Skill name="NextJs" x="4vw" y="-7vw" />
            <Skill name="NestJs" x="54vw" y="-2vw" />
            <Skill name="Mobile Development" x="0vw" y="-22vw" />
            <Skill name="MySql" x="-20vw" y="20vw" />
            <Skill name="Tailwind CSS" x="-4vw" y="25vw" />
            <Skill name="Figma" x="-33vw" y="5vw" />
            <Skill name="Firebase" x="6vw" y="20vw" />
            <Skill name="Javascript" x="6vw" y="-15vw" />
            <Skill name="Linux" x="-43vw" y="-10vw" />
            <Skill name="MongoDB" x="-50vw" y="8vw" />
            <Skill name="Web Development" x="-17vw" y="10vw" />
         </div>
    </>
  )
}

export default Skills