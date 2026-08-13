import SetGraphRectangle from "../widgets/graph.jsx";
import HeroAbout from "../ui/heroAbout.jsx";
import AboutBar from "../ui/aboutBar.jsx";

export default function HeroSection({data}){

    // console.log(data)
    return(
        <section id="Hero" className="Hero text-[4xl]  flex flex-col w-full  max-w-7xl min-h-screen justify-center items-center mt-10 p-6 gap-8 md:gap-0 md:px-32 lg:px-48">

            <div className="NAME-DIV flex flex-col w-full h-[35vh] gap-4">
                <div className="BREADCRUMBS flex w-full h-10 font-iceland text-sm text-secondary-light2">
                    {data.roles.others.map((role, index) =>(

                        <div
                        key={index}
                         className={`flex-1 leading-tight ${
                            index === 0
                                ? "text-left"
                                : index === 1
                                ? "text-center"
                                : "text-right"
                         }`}
                         
                        >
                            <p>{role}</p>
                        </div>
                    
                
                ))}


                </div>
                <div className="Name flex h-[60%] justify-center text-center items-center font-zen font-bold text-5xl md:text-6xl  text-background-light">
                    <h2>{data.fname}</h2>
                </div>
                <div className="Name2 flex h-[20%] justify-center items-center text-5xl md:text-6xl font-town font-bold text-primary-dark ">
                    <h3 className="-mt-10 md:-mt-16">{data.lname}</h3>
                </div>

                <div className="BREADCRUMBS flex flex-row h-[25%] ">

                    <div className="w-full h-full flex gap-2 font-iceland font-bold text-secondary-light2 justify-start items-center">
                        <div className="border rounded-[50%] w-[50px] h-[29px] flex justify-center items-center">
                            

                            <div className="border rounded-[50%] w-[38px] h-[22px] flex justify-center items-center">
                                <div className="border rounded-[50%] w-[28px] h-[22px] flex justify-center items-center">
                                    <div className="border rounded-[50%] w-[20px] h-[22px] flex justify-center items-center">
                                

                                    </div>

                                </div>

                            </div>
                        </div>
                        <p >{data.roles.main}</p>

                    </div>

                    <div className=" SOCIALS flex flex-row w-[40vw] h-full justify-center items-end">
                        <div className="h-full w-full flex flex-row  gap-1 justify-center items-end text-xl">
                            
                            <a
                                href={`mailto:${data.gmail}`} 
                                className="rounded-md border-2 border-secondary-light2 w-10 h-8 flex flex-row justify-center items-center " 
                                aria-label= "Email"
                            >
                            
                                <i class="ph ph-envelope-simple  pointer-events-none"></i>
                            </a>  
                          

                            <a
                                href={data.github}
                                className="rounded-md border-2 border-secondary-light2 w-10 h-8 flex flex-row justify-center items-center"
                                aria-label="Github"
                            >
                                <i class="ph ph-github-logo"></i>
                            </a>
                            <a
                                href={data.linkedin}
                                className="rounded-md border-2 border-secondary-light2 w-10 h-8 flex flex-row justify-center items-center"
                                aria-label="LinkedIn"
                            >
                                <i class="ph ph-linkedin-logo"></i>
                            </a>
                            
                           
                        </div> 
                        
                    </div>

                   
                  
                    
                    
                </div>
               
            </div>
            <div className="ABOUT-DIV w-full flex min-h-[50vh] md:h-[52vh] text-wrap:pretty">
                <HeroAbout  desc={data.description}/>
            </div>
            <div className="ABOUT-DIV2 w-full rounded-full border leading-tight overflow-hidden flex h-[2rem] ">
                <AboutBar skills={data.skills} />
            </div>
           

           
            
                
        </section>

        
    );
}

