import React from 'react'
import ResumeImg from "../assets/Resume.png";

const Contact = () => {
  
  const config= {
      Email: 'varunprofessional3@gmail.com',
      Phone: '+91 7695805324'
  }

  return (
    <section id='contact' className="flex flex-col bg-primary px-5 py-32 text-white">
      
      <div className="flex flex-col items-center">
        
    
          <h1 className="text-4xl w-[140px] border-b-4 border-[#2b2d77] mb-5 font-bold ">
            Contact
          </h1>
          
          <p className="pb-5 text-2xl" >
            For further details, please contact me
          </p>

          <p className='text-xl'> <span>Email :</span> {config.Email}</p><br/>
          <p className='text-xl'> <span>Phone no :</span>{config.Phone}</p>
          
      </div>
    </section>

  )
}

export default Contact