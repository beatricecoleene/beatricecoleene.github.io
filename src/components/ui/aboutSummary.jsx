

export default function AboutSummary({data}){


    return(
        <div className="AboutSummary w-full h-full flex flex-col rounded-2xl ">
            <div className="header flex flex-row  justify-between items-center p-2 w-full h-[2rem]">
                <i class="ph ph-sparkle text-xl text-primary"></i>
                <i class="ph ph-arrows-clockwise text-base"></i>
            </div>
            <div className="header flex flex-col justify-center  items-start p-2 w-full h-[7rem]">
               
                <h1 className="text-xl font-zen">{data.Name}</h1>
               
            </div>

            <div className="header flex flex-col  justify-start gap-2 items-center p-2 w-full h-[15rem]">
                <div className="w-full h-[3rem]">
                    <p className="text-xs ">Profile:</p>
                    <p className="text-sm font-bold text-secondary-light2 pl-4">{data.Profile}</p>
                </div>
                <div className="w-full h-[4rem]">
                    <p className="text-xs  ">Focus:</p>
                    <p className="text-[11px] leading-tight font-bold text-secondary-light2 pl-4">{data.Focus}</p>
                </div>
                <div className="w-full h-[4rem] ">
                    <p className="text-xs  ">Base:</p>
                    <p className="text-sm font-bold text-secondary-light2 pl-4">{data.Base}</p>
                </div>
                <div className="w-full h-[4rem]">
                    <p className="text-xs  ">Status:</p>
                    <p className="text-sm font-bold text-secondary-light2 pl-4">{data.Status}</p>
                </div>
              
            </div>

            
        </div>

    );
}