import { useState } from "react";

export default function Header({ children }){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 
              
         " >

          <div className="pl-8 h-10 flex justify-between items-center bg-background "> 
            <a href="#Hero">

            <h1 className="text-4xl font-iceland hover:text-secondary">Bea.</h1>
            </a>
            {/*  [-webkit-text-stroke:1px_#DB4E78]  */}
            <nav className="hidden md:flex h-full w-[85%]  justify-between items-center rounded-l-full bg-[#F5F5F5] font-outfit text-[#121111] text-lg pl-8 z-10">
              <div className="CONTENT flex gap-8 h-full w-[90%] justify-start items-center font-iceland ">
                <a href="#About" className="transition-all duration-300 hover:text-secondary hover:[text-shadow:0_0_8px_#64AE85,0_0_4px_#122A14] ">About</a>
                <a href="#Projects" className="hover:text-secondary hover:[text-shadow:0_0_8px_#64AE85,0_0_4px_#122A14]">Projects</a>
                <a href="#Skills" className="hover:text-secondary hover:[text-shadow:0_0_8px_#64AE85,0_0_4px_#122A14]">Skills</a>
                <a href="#Contact" className="hover:text-secondary hover:[text-shadow:0_0_8px_#64AE85,0_0_4px_#122A14]">Contact</a>
              </div>
              <div className="RESUME h-full w-[10%] flex justify-center items-center">

                <a 
                  href="/Resume-Beatrice_Dela_Cruz.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex rounded-lg bg-background justify-center items-center">
                  <i className="fa-solid fa-align-left text-xl text-primary"></i>
                </a>
              </div>
              
            </nav>

          <div className="md:hidden relative flex items-start justify-start h-full w-full">

              {/* TOP BUTTON BAR */}
              <div
                className={` md:hidden absolute top-0 right-0 flex flex-col justify-center transform-all duration-300 z-10 shadow-lg
                  ${
                    isOpen ? "w-48 gap-4 flex justify-center items-center rounded-bl-2xl h-[60vh] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.9)_3%,rgba(211, 204, 204, 0.2)_9%,rgba(30,30,30,0.5)_20%,rgba(30,30,30,0.5)_100%)] backdrop-blur-md border-l border-b border-white/20" 
                    :
                     "w-24 h-12 rounded-bl-2xl bg-background-light flex  justify-center items-center"
                  }
                
                  
                `}
              >
                <button
                  className={`text-2xl transition-transform duration-300 flex text-primary-semi font-audio ${
                    isOpen ? "absolute rotate-180  top-0 left-0" : "rotate-0 "
                  }`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? "✕" : "☰"}
                </button>
             

                {/* MOBILE NAV */}
                <nav
                  className={`  flex w-full flex-col justify-center items-center gap-2 transform-all duration-300 md:hidden font-iceland text-lg 
                    

                      ${
                        isOpen
                          ? "opacity-100 visible"
                          : "opacity-0 invisible hidden"
                      }
                    `}
                >
                  <a href="#About" className="w-full flex h-full justify-center items-center hover:text-secondary hover:bg-background-light/10  hover:[text-shadow:0_0_8px_#64AE85,0_0_4px_#122A14] rounded-md">
                    About
                  </a>

                  <a href="#Projects" className="w-full flex h-full justify-center items-center hover:text-secondary hover:bg-background-light/10  hover:[text-shadow:0_0_8px_#64AE85,0_0_4px_#122A14] rounded-md">
                    Projects
                  </a>

                  <a href="#Skills" className="w-full flex h-full justify-center items-center hover:text-secondary hover:bg-background-light/10  hover:[text-shadow:0_0_8px_#64AE85,0_0_4px_#122A14] rounded-md">
                    Skills
                  </a>

                  <a href="#Contact" className="w-full flex h-full justify-center items-center hover:text-secondary hover:bg-background-light/10  hover:[text-shadow:0_0_8px_#64AE85,0_0_4px_#122A14] rounded-md">
                    Contact
                  </a>

                  <a
                    href="/Resume-Beatrice_Dela_Cruz.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex h-full justify-center items-center hover:text-secondary hover:bg-background-light/10  hover:[text-shadow:0_0_8px_#64AE85,0_0_4px_#122A14] rounded-md">
                    Resume
                  </a>

                </nav>

            </div>
          </div>

          
          </div>

        

        </header>

    );


}