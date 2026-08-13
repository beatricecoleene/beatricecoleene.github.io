

export default function SkillsSection({data}){
    // console.log(data)
    return(
                <section id="Skills" className="Skills p-6 text-4xl flex flex-col w-full min-h-[70vh] items-center font-outfit ">
                   
                    <div className="title-DIV w-full flex h-auto m-2 text-2xl font-zen text-primary  md:px-32 lg:px-48">
                            <h1>./ Skills</h1>
                    </div>
                    <div className="SkillsBody w-full flex flex-wrap justify-start items-start gap-4 md:px-10 lg:px-48">
                        
                        {Object.entries(data).map(([category, skills]) =>(
                            
                        

                            <div
                                key={category}
                                className="SkillCard w-full sm:w-[48%] md:w-[31.5%] min-h-32 flex flex-wrap justify-center">
                                <div className="text-sm flex flex-row w-full h-8 ">
                                    <div className="min-w-[50px] flex flex-shrink-0 bg-background-alt backdrop-blur-md border-t border-l border-r border-primary-dark bg-primary  rounded-t-lg text-lg justify-center items-center">
                                        <h2 className=" text-background text-base p-2 font-electro">
                                            {category}
                                        </h2>
                                    </div>

                                    <div className="w-[6.7rem]"></div>

                                </div>

                                <div className="SKILLS min-h-[165px] w-full flex flex-wrap justify-center items-center border rounded-lg border-primary-dark shadow-[0_-10px_0_theme(colors.primary.dark)] p-2 gap-2">
                                    
                                    {Object.entries(skills).map(([name,icon]) => (

                                    

                                        <div className="TAG bg-background border-2 border-secondary-light rounded-full overflow-hidden shadow-[0_0_1px_theme(colors.secondary.light),0_0_3px_theme(colors.secondary.dark)]">

                                            <div className=" flex flex-row min-w-[100px] h-[35px] gap-2 justify-evenly items-center">
                                                <img 
                                                    src={icon}
                                                    
                                                    className="w-6 h-6"
                                                    />

                                            
                                                
                                                <p className="text-xs text-primary font-electro">{name}</p>
                                            
                                            </div>

            
                                        </div>
                                    ))}
                                    
                                
                            </div>
                        



                            </div>
                        ))}
                     
                     
                </div>
                    
                </section>

    );
}

