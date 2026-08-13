import { useState } from "react";
import modelsPic from "../../assets/models.png";

import GithubSummary from "../ui/githubsummary.jsx";
import { Key } from "lucide-react";

import ProjectCard from "../ui/projectCard.jsx";


export default function ProjectsSection({data}){

    const [showAllTags, setShowAllTags]= useState(false);
    const [showFullDesc, setShowFullDesc]= useState(false);


    return(
                <section id="Projects" className="Projects gap-4 p-6 text-2xl flex flex-col w-full min-h-screen items-center  ">
                    <div className="title-DIV w-full flex h-auto m-2 text-2xl font-zen text-primary  md:px-32 lg:px-48">
                            <h1>./ Projects</h1>
                    </div>
                    <div className="summary w-[20rem] md:w-[50rem] border border-primary flex h-[10rem] md:h-[4rem] m-2 rounded-xl ">
                            <GithubSummary></GithubSummary>
                    </div>
                    <article className="w-full max-sm:overflow-x-auto ">
                        <div
                            className="
                                PROJECTBODY
                                w-max
                                flex flex-row
                                max-sm:flex-nowrap
                                max-sm:justify-start
                                gap-4
                                md:w-full
                                md:flex-wrap
                                md:justify-center
                                md:px-10
                                lg:px-32
                                items-start
                                snap-x snap-mandatory
                            "
                        >
                                
                            {Object.entries(data).map(([key, project]) => {
                               
                                    return (   
                                        <div 
                                            key={project.title}
                                            className="PROJECT-CARD border w-[270px] md:w-[17rem] min-h-[415px] flex flex-col gap-2 border-secondary rounded-xl pl-6 pr-6 pt-4 pb-2 items-center snap-center ">

                                            <div className="w-full flex justify-center items-center">
                                                <div className="flex flex-row gap-2 items-center justify-center min-w-0 ">
                                                    {/* <i class="ph ph-sparkle"></i> */}
                                                    <h2 className="text-[1.3rem] text-primary whitespace-nowrap font-iceland">{project.title}</h2>
                                                </div>
                                        
                                            </div>


                                            <div className="w-full h-[170px] flex justify-center items-center ">
                                               <ProjectCard
                                                    key={project.title}
                                                    project={project}
                                               />
                                            </div>



                                            <div className="Sites w-full h-10  flex flex-row justify-between items-center ">
                                                <h3 className="text-sm font-bold font-outfit text-primary-dark">{project.date}</h3>

                                                <div className=" flex flex-row gap-2 "> 

                                                    {project.github && ( 
                                                        <a
                                                            href={project.github_link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="rounded-full border border-secondary-light w-[2rem] h-[2rem] flex justify-center items-center text-lg"
                                                        >
                                                            <i class="fa-brands fa-github"></i>
                                                        </a>
                                                    )}
                                                    {project.download && (
                                                        <a 
                                                            href={project.download_link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="rounded-full border border-secondary-light w-[2rem] h-[2rem] flex flex-row justify-center items-center text-lg">
                                                                <i class="ph ph-download"></i>
                                                        </a>
                                                    )}
                                                </div>

                                            </div>



                                            <div className={`DESCRIPTION w-full rounded-xl border-[#F9B4B5] flex flex-row justify-between items-start
                                                transition-all duration-300 font-electro
                                                ${showFullDesc ? "h-auto" : "h-[90px]"}
                                                
                                                `}>

                                                <div className={`w-full flex
                                                    transition-all duration-300  gap-4
                                                    ${showFullDesc ? "h-auto flex-wrap" : "h-full overflow-hidden flex-wrap justify-center items-center gap-4"}
                                                    `}>

                                                    <div className="SUMMARY">
                                                        <div className="flex justify-center items-center">
                                                            <p className="text-xs text-text tracking-wide ">{project.main_info}</p>
                                                        </div>
                                                    </div>
                                                    <div className="ADDITIONAL-INFO">
                                                        <div className="flex justify-center items-center">
                                                            <p className="text-xs text-text tracking-wide ">{project.additional_info}</p>
                                                        </div>
                                                    </div>
                                                
                                                    <div className="CONTRIBUTIONS flex flex-col gap-2">

                                                        <p className="text-sm font-zen text-secondary-light2">My Contributions: </p>
                                                        <div className="flex justify-center items-center text-primary-light">
                                                           <ul class="list-disc list-inside text-xs" >
                                                                {project.contributions.map((contri, index) =>(
                                                                    <li>{contri}</li>
                                                                ))}
                                                           </ul>
                                                        </div>
                                                    </div>
                                                    
                                                </div>

                                                <div>
                                                    <div className=" text-sm w-8 h-full flex justify-center items-start hover:scale-110 transition  hover:animate-bounce"
                                                    >
                                                    <button
                                                        onClick={() => setShowFullDesc(!showFullDesc)}

                                                    >
                                                        <i className={`ph font-bold text-lg
                                                                ${
                                                                    showFullDesc ? "ph-caret-up" : "ph-caret-down"
                                                                }
                                                            `}>

                                                        </i>
                                                    </button>
                                                    </div>
                                                </div>
                                            </div>



                                            <div className="w-full flex flex-row justify-center items-center">

                                                <div className={`TAGSDIV w-[250px] flex justify-start items-center pl-2 gap-2
                                                    transition-all duration-300
                                                    ${showAllTags ? "h-auto flex-wrap" : "h-[27px] overflow-hidden flex-wrap"} 

                                                    `}
                                                >
                                                    {project.tech.map((tech, index) =>
                                                   
                    
                                                    
                                                        <div
                                                            className="
                                                            flex justify-center items-center
                                                            text-[0.8rem]
                                                            min-w-[55px]
                                                            h-[20px]
                                                            

                                                            
                                                            font-outfit
                                                            text-secondary-light/80

                                                            bg-white/4
                                                            backdrop-blur-lg

                                                            shadow-[0_0_3px_rgba(255,255,255,0.03)]


                                                            border
                                                            border-secondary-light2/20
                                                            rounded-full
                                                            p-2
                                                        
                                                            
                                                            "
                                                        >
                                                            {tech}
                                                        </div>
                                                    )}
                                                

                                                </div>
                                                <div className="flex justify-center items-center">
                                                    <button
                                                        onClick={() => setShowAllTags(!showAllTags)}
                                                        className="ml-auto text-sm hover:scale-110 transition  hover:animate-bounce"
                                                    >
                                                        <i className={`ph font-bold text-lg 
                                                                ${
                                                                    showAllTags ? "ph-caret-up" : "ph-caret-down"
                                                                }
                                                            `}>

                                                        </i>
                                                    </button>
                                                </div>

                                            </div>


                                            

                                        </div>
                                    );
                                 })}

                        


                            
                            
                                    

                            </div>  
                                
                            </article> 
                    
                        
                        
                    
                </section>

    );
   
}

