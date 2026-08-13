import AboutMeCanvas from "./me_canvas";

export default function HeroAbout({desc}){
    return(
        <div className="w-full h-full flex flex-col md:flex-row justify-center items-center md:px-6 lg:px-24 gap-6 md:gap-8">

            <div className=" w-full h-auto md:h-[40vh] flex flex-row md:flex-row justify-center items-center text-2xl gap-8"> 
                <div className="w-2  h-24 md:h-full flex flex-col justify-center items-center">
                   <i className="ph ph-caret-double-down"></i>
                   <i className="ph ph-caret-double-down"></i>
                   <i className="ph ph-caret-double-down"></i>
                   <i className="ph ph-dot text-secondary-light2"></i>
                   <i className="ph ph-dot text-secondary-light2"></i>
                </div>


                <AboutMeCanvas width="w-full md:w-[250px]" height="h-[240px] md:h-[270px] " rounded="rounded-[5%]"></AboutMeCanvas>

                <div className="w- h-24 md:h-full flex flex-col justify-center items-center">
                   <i className="ph ph-caret-double-down"></i>
                   <i className="ph ph-caret-double-down"></i>
                   <i className="ph ph-caret-double-down"></i>
                   <i className="ph ph-dot text-secondary-light2 "></i>
                   <i className="ph ph-dot text-secondary-light2 "></i>
              
                </div>

            </div>
            <div className="w-full flex gap-6 flex-col justify-center items-center font-electro font-bold text-secondary-light2 text-lg  ">
                <article>
                    <div className="w-full h-full flex flex-col justify-center items-center font-iceland font-bold text-secondary-light2 text-lg md:text-sm lg:text-lg leading-tight border-secondary-semi">
                        <p>Computer Science graduate who enjoys building software and learning new technologies through practice and experimentation.</p>
                    </div>
                </article>
                <a 
                    href="/Resume-Beatrice_Dela_Cruz.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 w-full h-[35px] border-primary-dark flex justify-center items-center rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)]  ">
                    <p className="text-primary">Resume</p>
                </a>
            </div>
            
           
        </div>
    );
}