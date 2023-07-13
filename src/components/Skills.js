import React from 'react'
import {motion} from 'framer-motion'


const Skill = ({name, x, y}) => {

    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            p-8 shadow-dark cursor-pointer
            '
            whileHover={{scale:1.05}}
            initialScale={{x:0,y:0}}
            animate={{x:x, y:y}}
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
            px-6 py-3 shadow-dark cursor-pointer absolute
            '
            whileHover={{scale:1.05}}>
                web 
            </motion.div>

            <Skill name="CSS" x="49vw" y="2vw" />
            <Skill name="HTML" x="60vw" y="-18vw" />
            <Skill name="Javascript" x="25vw" y="6vw" />
            <Skill name="Typescript" x="82vw" y="-9vw" />
            <Skill name="React" x="50vw" y="-12vw" />
            <Skill name="NextJs" x="4vw" y="-7vw" />
            <Skill name="NestJs" x="43vw" y="-2vw" />
            <Skill name="Dart" x="0vw" y="-22vw" />
            <Skill name="MySql" x="-20vw" y="20vw" />
            <Skill name="Tailwind CSS" x="-4vw" y="25vw" />
            <Skill name="Figma" x="-25vw" y="15vw" />
            <Skill name="Firebase" x="6vw" y="20vw" />
            <Skill name="Heroku" x="-10vw" y="-20vw" />
            <Skill name="Vercel" x="-43vw" y="-1vw" />
            <Skill name="Git" x="-43vw" y="8vw" />
            <Skill name="Python" x="-60vw" y="-10vw" />
            <Skill name="Flutter" x="-85vw" y="-20vw" />
            <Skill name="MongoDB" x="-50vw" y="8vw" />
            <Skill name="Docker" x="-35vw" y="10vw" />
            <Skill name="Linux" x="-46vw" y="-25vw" /> 
            <Skill name="PostgreSql" x="-40vw" y="1vw" /> 
         </div>
    </>
  )
}

export default Skills