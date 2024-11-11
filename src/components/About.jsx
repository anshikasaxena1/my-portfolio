import React from 'react'
import Tilt from "react-parallax-tilt"
import {motion} from 'framer-motion'

import { SectionWrapper } from '../hoc'
import {styles} from '../styles'
import {services} from '../constatnts'
import {fadeIn, textVariant} from '../utils/motion'

const ServiceCard=({index,title,icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card border-none overflow-hidden"
  tiltMaxAngleX={45}       // Tilt angle for the X-axis
  tiltMaxAngleY={45}       // Tilt angle for the Y-axis
  scale={1.05}             // Slightly zooms in for a 3D effect
  transitionSpeed={450} 
  glareEnable={false}          // Disable glare effect
  perspective={1000}
  >
      <motion.dev variants={fadeIn("right","spring",0.5*index,0.75)} 
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div 
          options={{
            max:45,
            scale:1,
            speed: 450
          }} 
          className='bg-tertiary rounded=[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' 
          >
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
            <h3 className='text-white text-[20px] font-bold text-center' >{title}</h3>
          </div>

      </motion.dev>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.dev>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.dev>
      <motion.p
      // variants accept four params {direction,type,delay,duration of animation}
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >

        I'm a web developer specializing in the MERN stack, with additional skills in Three.js for creating engaging, interactive 3D elements. My focus is on building responsive, user-friendly web applications, drawing on a solid foundation in data structures to optimize performance. I’m also available for freelance work, where I enjoy crafting tailored solutions and bringing creative ideas to life. Let’s connect and explore how I can contribute to your next project!
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default  SectionWrapper(About,"about")