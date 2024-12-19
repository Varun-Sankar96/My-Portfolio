import React from "react";
import AboutMe from "../assets/AboutMe.png";

const About = () => {
    const config ={
      para1: "Enthusiastic and detail-oriented Front-End Developer with a solid foundation in HTML, CSS, JAVASCRIPT, BOOTSTRAP, REACT JS.",
      para2: "A graduate with a degree in computer science and a passion on creating user-friendly and visually appealing websites.",
      para3: "Proven ability to collaborate with cross-functional teams to design and implement responsive web solutions.",
      para4: " Adept at staying current with emerging technologies and trends in front-end development. Eager to contribute creativity, technical skills, and a strong work ethic to a dynamic development team."
    }

  return (
    <section id="about" className="flex flex-col md:flex-row bg-secondary px-5">
      <div className="md:w-1/2 px-10 py-10">
        <img src={AboutMe} />
      </div>
      <div className=" md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center">
         
          <div className="text-white">
          <h1 className="text-4xl w-[170px] border-b-4 border-[#5551e3] mb-5 font-bold">
            About Me
          </h1>
          <p className="pb-5 text-xl" >
            {config.para1}
          </p>
          <p className="pb-5 text-xl">
            {config.para2}
          </p>
          <p className="pb-5 text-xl">
            {config.para3}
            
          </p>

          <p className="pb-5 text-xl">
           {config.para4}
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
