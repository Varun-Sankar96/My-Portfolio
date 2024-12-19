import React from 'react'
import ResumeImg from "../assets/Resume.png";
import VarunResume from "../assets/Varun-resume.pdf"

const Resume = () => {
  return (
    <section id='resume' className="flex flex-col md:flex-row bg-secondary px-5">
      <div className="md:w-1/2 px-10 py-10 ">
        <img src={ResumeImg} />
      </div>
      <div className=" md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center">
         
          <div className="text-white">
          <h1 className="text-4xl w-[140px] border-b-4 border-[#5551e3] mb-5 font-bold">
            Resume
          </h1>
          <div>
          <p className="pb-5 text-xl" >
            Here, it is my resume <br/> 
          </p>
          </div>  

          
          <button className='downloadBtn mb-5 ' ><a href='VarunResume' download={VarunResume}>Download</a></button>
          

          
          </div>
          


        </div>
      </div>
    </section>

)
}

export default Resume