
export default function GetFolder({

    children,
    className="",
    height="",
    width = "w-full",
    

}){
    return(


        <div className={`FOLDER w-full h-32 flex flex-wrap m-4
        `}>
            <div className="text-sm flex flex-row w-full h-8">
                <div className="min-w-32 bg-background-alt backdrop-blur-md border-t border-l border-r  rounded-t-lg">tab</div>

                <div className="w-full"></div>

            </div>
            <div className={`min-h-${height} w-${width} border rounded-b-lg rounded-tr-lg shadow-lg`}></div>

        </div>

    );
}


