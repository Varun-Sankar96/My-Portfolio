import React from "react";
import Ecommerceimg from "../assets/Ecom.png";
import FoodImg from "../assets/Food.jpg";
import BlogImg from "../assets/Blog.jpg";

const Projects = () => {

    const config = {
      projects: [
        {
          image: Ecommerceimg,
          description: "Ecommerce website using MERN stack",
          link: ""

        },

        {
          image: FoodImg,
          description: "Food Ecommerce website built by React js",
          link: ""

        },

        {
          image: BlogImg,
          description: "Basic Blog website using react js",
          link: ""

        }
      ]
    }


  return (
    <section id="projects" className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
      <div className="w-full">
        <div className="flex flex-col px-24 py-3">
          <h1 className=" text-4xl font-bold border-b-4 w-[135px] border-[#2b2d77] mb-5">
            Projects
          </h1>
          <p className="text-xl">The projects that i built mainly using MERN stack.</p>
        </div>
      </div>


      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 justify-center">

          {config.projects.map((project)=> 
            <div className="relative ">
            <img className="h-[250px]" src={project.image} />
            <div className="project-description ">
              <p className="text-center py-28 text-xl">  {project.description} <br/> <br/> <div className="flex justify-center mb-3">
              <a className="btn" target="_blank" href={project.link}> View project</a>
              </div> </p>
              
              
              
              
               
            </div>
               
            </div>
         )}
          

          
        </div>
      </div>
    </section>
  );
};
 
export default Projects;
