// import meImage from "../../assets/me2.png";

// export default function AboutMeCanvas({}){
//     return(

//         <div className="flex justify-center items-center h-96 w-80 bg-[linear-gradient(to_bottom,#FFA8C8,#95053a)]">
//                         {/* sheer overlay on top of the pic */}
//             <div className="flex justify-center items-center h-96 w-80 bg-[linear-gradient(to_bottom,#FFA8C8,#95053a)] bg-transparent"></div>
//             <img src={meImage} alt="Me" className="flex inset-0 w-full h-full object-cover "></img>

//         </div>
      

//     );
// }

import meImage from "../../assets/me2.png";

export default function AboutMeCanvas({
  width = "w-full",
  height= "h-full",
  rounded = "",
}) {
  return (
    <div className={`PICDIV grid ${width} ${height} ${rounded}   bg-[linear-gradient(to_bottom,#FFA8C8,#95053a)]`}>
      
      {/* Image */}
      <img
        src={meImage}
        alt="Me"
        className={` w-full ${height} object-contain col-start-1 row-start-1`}
      />

      {/* Sheer gradient overlay */}
      <div className={`w-full h-full col-start-1 row-start-1 bg-[#e6166265]/10 ${rounded}`}></div>

    </div>
  );
}