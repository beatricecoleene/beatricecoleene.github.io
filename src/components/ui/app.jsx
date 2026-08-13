import { Routes, Route } from "react-router-dom"

function Home() {
  return <h1 className="text-2xl">Home Page</h1>
}

function About() {
  return <h1 className="text-2xl">About Page</h1>
}

export default function App() {
  return (
    <div className="flex bg-[#0C0C0C] min-h-screen text-[#F9B4B5]">
      <div className="flex flex-col w-[6%]  justify-between items-center border 
      bg-[linear-gradient(to_bottom,#FD3F75,#7AFF05,#FD3F75,#7AFF05)]">

        <div className="w-[2px] h-32 bg-gray-400"></div>
        <div className="w-[2px] h-32 bg-gray-400"></div>
        <div className="w-[2px] h-32 bg-gray-400"></div>
      </div>
    





      
      <div className="w-[94%] flex flex-col">
        <header className="w-full p-4 flex justify-between items-center " >
          <h1 className="text-xl font-bold">Bea</h1>
          
          <nav className="h-[10%] flex gap-6 justify-center items-center z-10">

            <a href="#" className="hover:text-[#7FFF00]">About</a>
            <a href="#" className="hover:text-[#7FFF00]">Projects</a>
            <a href="#" className="hover:text-[#7FFF00]">Skills</a>
            <a href="#" className="hover:text-[#7FFF00]">Contact</a>
            <i className="fa-solid fa-file"></i>
          </nav>

        </header>
        <div className=" flex flex-col ">
          <div class="h-screen bg-[#0C0C0C] 
          bg-[linear-gradient(#333_1px,transparent_1px),linear-gradient(to_right,#333_1px,transparent_1px)] 
          bg-[size:40px_40px]">
          </div>
          
         
      
        </div>
      </div>
    </div>
  )
}