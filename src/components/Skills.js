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

            <Skill name="HTML" x="-20vw" y="2vw" />
            <Skill name="CSS" x="-5vw" y="-8vw" />
            <Skill name="Javascript" x="20vw" y="6vw" />
            <Skill name="Typescript" x="15vw" y="17vw" />
            <Skill name="React" x="7vw" y="-20vw" />
            <Skill name="NextJs" x="-8vw" y="-17vw" />
            <Skill name="NestJs" x="-18vw" y="-3vw" />
            <Skill name="MongoDB" x="-5vw" y="25vw" />
            <Skill name="MySql" x="-5vw" y="-10vw" />
            <Skill name="TailwindCSS" x="-5vw" y="-10vw" />
            <Skill name="Figma" x="-5vw" y="-10vw" />
            <Skill name="Firebase" x="-5vw" y="-10vw" />
            <Skill name="Heroku" x="-5vw" y="-10vw" />
            <Skill name="Vercel" x="-5vw" y="-10vw" />
            <Skill name="Git" x="-5vw" y="-10vw" />
            <Skill name="Python" x="-5vw" y="-10vw" />
            <Skill name="Flutter" x="-5vw" y="-10vw" />
            <Skill name="Dart" x="-5vw" y="-10vw" />
            <Skill name="Docker" x="-5vw" y="-10vw" />
            <Skill name="Linux" x="-5vw" y="-10vw" />
         </div>
    </>
  )
}

export default Skills