import React from 'react'
import HeroImg from '../assets/Hero.png'
import { AiOutlineLinkedin,AiOutlineInstagram,AiOutlineGithub } from "react-icons/ai";

const Hero = () => {
  const config = {
     subtitle: "I'm a Front-End Developer",
     social : {
      linkedIn : "https://www.linkedin.com/in/varun-vicky-4a6a12173/",
      github: "https://github.com/Varun-Sankar96",
      instagram: "https://www.instagram.com/invites/contact/?igsh=prblnd6l43xv&utm_content=3hodwfm"
     }
  }



  return (
    <section id='hero' className='flex flex-col md:flex-row  px-5 py-32 bg-primary justify-center '>
    <div className=' md:w-1/2 sm:text-center'>
        <h1 className=' text-white text-6xl font-hero-font '>Hi,<br/> I'm Varun
        <p className='text-2xl'>{config.subtitle}</p>   
        </h1>
     <div className='flex  py-10 sm:justify-center '>
        <a target='_blank' href={config.social.linkedIn} className='pr-5 hover:text-white'> <AiOutlineLinkedin size={40}/> </a>
        <a target='-blank' href= {config.social.github} className='pr-5 hover:text-white'> <AiOutlineGithub size={40}/> </a>
        <a target='_blank' href={config.social.instagram} className=' hover:text-white'> <AiOutlineInstagram size={40}/> </a>
        
    </div>
    </div>
    
    <img  src={HeroImg} className='md:w-1/3' />
    </section>
  )
}

export default Hero