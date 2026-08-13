import AboutSummary from "../ui/aboutSummary";


export default function AboutMeInfoSection({data}){
    return(
                <section id="About" className="About p-6 text-4xl flex flex-col w-full min-h-screen items-center ">
                    <article className=" w-full flex flex-col gap-2 justify-center items-center">
                        <div className="title-DIV w-full flex h-auto m-2 text-2xl font-zen text-primary md:px-32 lg:px-48">
                            <h1>./ About Me</h1>
                        </div>
                        <div className="ABOUTBODY w-full  flex flex-col md:flex-row h-auto m-2 p-4 gap-2 font-electro text-background-light justify-center items-center md:px-32 lg:px-48 ">
                            <div className="w-full  flex flex-col h-auto m-2 gap-2 ">
                                <p className="text-sm lg:text-base">
                                    {data.Description.I_p}
                                </p>
                                <p className="text-sm lg:text-base">
                                 {data.Description.II_p}
                                </p>
                                <p className="text-sm lg:text-base">
    
                                     {data.Description.III_p}
                                </p>
                            </div>
                            <div className="w-[17rem] md:w-[25rem] h-[25rem] border rounded-2xl">
                                <AboutSummary data={data.Card}/>
                            </div>
                        </div>

                        <div className="MILESTONES w-full flex flex-wrap justify-center items-center gap-4  ">
                            <div className="w-full flex flex-row justify-start items-start text-[1.4rem] text-primary-light2 font-zen pl-2 md:px-36 lg:px-48">
                                <h1>../MileStones</h1>
                            </div>
                            <div className="EDUCATION w-[22rem] md:w-[17rem] border flex flex-col h-auto gap-2 text-xl font-zen text-secondary p-2">
                                <div className="flex flex-row gap-2 justify-start">
                                    <i className="ph ph-gear-six text-lg font-bold text-primary"></i>
                                    <h2>Education</h2>

                                </div>
                                <div className="EDUCATIONDIV flex flex-col w-full h-[15rem] border-2 p-2 gap-2 justify-start ">
                                    <div className="TITLE flex flex-row w-full text-sm gap-2">
                                        <i class="ph ph-graduation-cap text-secondary-light2 text-lg "></i>
                                        <div className="flex flex-col w-full">

                                        <h3 className="text-primary">Bachelor of Science in Computer Science</h3>
                                        <p className="date text-[9px] text-primary-light2">2022-2026</p>
                                        </div>
                                    </div>
                                    <div className="DESC flex flex-row w-full text-sm pl-4">
                                        <i class="ph ph-caret-right"></i>
                                        <div>
                                        
                                            <h3 className=" School text-background-light font-electro text-sm">
                                                College of Mary Immaculate
                                            </h3>
                                            <p className="Location text-[9px] text-background-light">Pandi,Bulacan</p>
                                        </div>  
                                    </div>
                                    <div className="Coursework flex flex-row w-full text-sm pl-6 gap-2">
                                        <p>▪</p>
                                        
                                        <div className="flex flex-col w-full gap-2 ">
                                            
                                            <h3 className=" School text-background-light font-electro text-xs">
                                                Coursework:
                                            </h3>
                                            <p className="Location text-[11px] font-electro text-background-light leading-tight"> Data Structures, Object-Oriented Programming, Programming, Algorithms, Information Security, Natural Language Processing, Intelligent Systems</p>
                                        </div>  
                                    </div>


                                </div>
                                
                            </div>
                            <div className="EXPERIENCES w-[22rem] md:w-[17rem] border flex flex-col h-auto gap-2 text-xl font-zen text-secondary p-2">

                                <div className="flex flex-row gap-2 justify-start">
                                    <i className="ph ph-gear-six text-lg font-bold text-primary"></i>
                                    <h2>Experiences</h2>

                                </div>
                                <div className="EXPDIV flex flex-col w-full h-[15rem] border-2 p-2 gap-2 justify-start ">
                                    <div className="TITLE flex flex-row w-full text-sm gap-2">
                                        <i class="ph ph-laptop text-secondary-light2 text-lg "></i>
                                        <div className="flex flex-col w-full">

                                        <h3 className="text-primary">Software Developer Intern</h3>
                                        <p className="date text-[9px] text-primary-light2">April 2025- May 2025</p>
                                        </div>
                                    </div>
                                    <div className="DESC flex flex-row w-full text-sm pl-4">
                                        <i class="ph ph-caret-right"></i>
                                        <div>
                                        
                                            <h3 className=" School text-background-light font-electro text-sm">
                                                JCAS Logistics
                                            </h3>
                                            <p className="Location text-[9px] text-background-light">Malolos,Bulacan</p>
                                        </div>  
                                    </div>
                                    <div className="AdditionalInfo flex flex-row w-full text-sm pl-6 gap-2">
                                        <p>▪</p>
                                        
                                        <div className="flex flex-col w-full gap-2 ">
                                            
                                            
                                            <p className="Information text-[11px] font-electro text-background-light leading-tight"> Developed the Accounting Module for the delivery and logistics application by designing wireframes, implementing frontend features, and planning the database structure, streamlining financial tracking and improving operational efficiency for the logistics and accounting team. </p>
                                        </div>  
                                    </div>


                                </div>
                                
                            </div>
                        
                            <div className="CERTS w-[22rem] md:w-[17rem] border flex flex-col h-auto gap-2 text-xl font-zen text-secondary p-2">

                                <div className="flex flex-row gap-2 justify-start">
                                    <i className="ph ph-gear-six text-lg font-bold text-primary"></i>
                                    <h2>Certificates</h2>

                                </div>
                                <div className="CERTDIV flex flex-col w-full h-[15rem] border-2 p-2 gap-2 justify-start ">
                                    <div className="TITLE flex flex-row w-full text-sm gap-2">
                                        <i class="ph ph-certificate text-secondary-light2 text-lg "></i>
                                        <div className="flex flex-col w-full">

                                        <h3 className="text-primary">Claude Code in Action, Anthropic Education   </h3>
                                        <p className="date text-[9px] text-primary-light2">April 2026</p>
                                        </div>
                                    </div>
                                    
                                    <div className="AdditionalInfo flex flex-row w-full text-sm pl-6 gap-2">
                                        <p>▪</p>
                                        
                                        <div className="flex flex-col w-full gap-2 ">
                                            
                                            
                                            <p className="Information text-[11px] font-electro text-background-light leading-tight"> Participated in comprehensive training on using Claude Code for software development tasks, covering the architecture of AI coding assistants, practical implementation techniques, and advanced integration strategies.   </p>
                                        </div>  
                                    </div>


                                </div>
                                
                            </div>
                       

                        </div>
                       
                    </article>
                
                    
                </section>

    );
}

