import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import AboutMeCanvas from "../ui/me_canvas";
import AboutBar from "../ui/aboutBar";



export default function ContactSection(){

    const form = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        setStatus("Sending...");


        emailjs
            .sendForm(
                "service_42h3thh",
                "template_a3qj924",
                form.current,
                {
                    publicKey:"EHbWCLtWgvJtus-O7",
                }
            )
            .then(
                () => {
                    setStatus("Message Sent!");
                    form.current.reset();
                },
                (error) => {
                    console.error(error);
                    setStatus("Failed to send message.");


                }
            );
    };



    return(
                <section id="Contact" className="p-6 text-4xl flex flex-col w-full min-h-screen items-center gap-2  ">
                    
                    <div className=" title-DIV w-full flex m-2 md:px-32 lg:px-48">
                        <h1 className="text-2xl font-zen ">./ Contacts</h1>
                    </div>

                    <div className="CONTACTBODY flex flex-col md:flex-row w-full md:w-[85%] p-4 gap-6 justify-center items-center">
                        
                        <div className="CONTACTCARD border border-primary w-[19rem] md:w-[25rem] h-[14rem] flex flex-row">

                            <div className="left flex flex-col w-[45%] h-full ">
                                <div className="top flex w-full h-[13%] items-center text-[1.6rem]">
                                    <i class="ph ph-identification-card"></i>
                                </div>
                                <div className="IMAGEDIV flex w-full h-[67%] justify-center items-center">
                                    <div className=" w-[7rem] h-[85%]">
                                        <AboutMeCanvas/>

                                    </div>

                                </div>
                                <div className="BARCODE flex w-full h-[20%] justify-center items-center">
                                    <p className="text-[1.4rem] font-barcode text-secondary-semi">071504 0251</p>

                                </div>

                            </div>
                            <div className="right w-[55%] h-full">
                                <div className="NAME flex w-full h-[30%]  justify-center items-end">
                                    <h1 className="text-pretty text-3xl font-town text-primary-dark">Beatrice Coleene</h1>

                                </div>
                                <div className="ROLES flex w-full h-[20%] justify-center items-center">

                                    <div className="border rounded-lg flex flex-row w-[93%] h-[75%]">
                                        {/* <p className="text-xs font-electro">Software Development, Web Development, AI & Machine Learning</p> */}
                                         <AboutBar skills={["Software Development", "Web Development", "AI & Machine Learning"]}/>
                                    </div>

                                </div>
                                <div className="INFO flex flex-col w-full h-[50%] p-2 gap-2 justify-start items-center">
                                    <div className=" flex  flex-row  text-xl w-[9rem] h-[2rem]">
                                        <div className=" border border-secondary-light2 w-[2rem] h-full flex justify-center items-center rounded-full ">

                                        <i class="ph ph-github-logo"></i>
                                        </div>
                                        <div className=" w-full h-full flex justify-center items-center  ">
                                            <p className="text-sm font-electro text-primary-light">beatricecoleene</p>

                                        </div>
                                    </div>
                                    
                                    <div className=" flex  flex-row  text-xl w-[9rem] h-[2rem]">
                                        <div className=" border border-secondary-light2 w-[2rem] h-full flex justify-center items-center rounded-full ">

                                        <i class="ph ph-envelope-simple"></i>
                                        </div>
                                        <div className=" w-full h-full flex justify-center items-center  ">
                                            <p className="text-sm font-electro text-primary-light">beatricecoleene</p>

                                        </div>
                                    </div>
                                    
                                    <div className=" flex  flex-row  text-xl w-[9rem] h-[2rem]">
                                        <div className=" border border-secondary-light2 w-[2rem] h-full flex justify-center items-center rounded-full ">

                                        <i class="ph ph-linkedin-logo"></i>
                                        </div>
                                        <div className=" w-full h-full flex justify-center items-center  ">
                                            <p className="text-sm font-electro text-primary-light">beatricecoleene</p>

                                        </div>
                                    </div>
                                    

                                </div>
                                

                            </div>

                        </div>




                        <div className="MAILCARD border border-secondary-light2 w-[19rem] md:w-[25rem] h-[23rem] flex flex-col font-iceland justify-start items-center">
                        
                            <div className="Title w-full h-[2.6rem] border">
                                <h2 className="text-xl pl-2 justify-center text-secondary-light2" >Message Me</h2>

                            </div>

                            <form 
                                ref= {form}
                                onSubmit={sendEmail}
                                className="MAILBODY w-[85%] h-full flex flex-col justify-start items-center pt-2 gap-2"
                            >
                                
                                <div className="ADDR  flex flex-col w-full h-[4rem] " >
                                    <label className="flex w-full h-[1.5rem] text-base">Your Email:</label>
                                    <div className="flex w-full h-[2rem] text-base justify-center items-center">

                                        <input
                                        type="email"
                                        name="from_email"
                                        placeholder="youremail@example.com"
                                        className="border border-primary-light flex w-[90%] h-full bg-transparent text-secondary-light2 "></input>
                                    </div>
                                    
                                </div>
                                <div className="SUBJ w-full h-[4rem] ">
                                    <label className="flex w-full h-[1.5rem] text-base">Subject:</label>
                                    <div className="flex w-full h-[2rem] text-base justify-center items-center">

                                        <input
                                        type="text"
                                        name="subject"
                                        placeholder="Enter Subject"
                                        className="border border-primary-light flex w-[90%] h-full bg-transparent text-secondary-light2 "></input>
                                    </div>
                                </div>
                                <div className="MAIN w-full h-[7.7rem]">
                                    <label className="flex w-full h-[1.5rem] text-base">Message:</label>
                                    <div className="flex w-full h-[6.2rem] text-base justify-center items-center">

                                        <textarea
                                        type="text"
                                        name="message"
                                        placeholder="Message"
                                        className="border border-primary-light flex w-[90%] h-full bg-transparent text-secondary-light2 justify-start items-center "></textarea>
                                    </div>
                                </div>

                                <button 
                                    type="submit"
                                    className=" w-[5rem] h-[2rem] flex text-[1.4rem] text-secondary-light2 justify-center items-center border-primary border-2"
                                >
                                    Send
                                </button>
                                
                                {status && (
                                    <p className="text-sm text-primary-light bg-background border border-primary z-50 p-2 top-6">
                                        {status}
                                    </p>
                                )}

                            </form>

                        </div>



                    </div>

                    

                    
                    
                    
                </section>

    );
}

