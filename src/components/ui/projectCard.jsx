import { useState } from "react";
import {getProjectImages} from "../../utils/projectImages";

export default function ProjectCard({project}){

    const images = getProjectImages(project.image_folder);

    const [currImage, setCurrImage] =useState(0);


    const nextImage = () => {

        setCurrImage((prev) => (prev + 1) % images.length);

    };
    
    const previosImage= () =>{
        setCurrImage((prev) => 
            prev == 0 ? images.length - 1: prev -1
        );
    };


    return (
        <div className="w-full h-full relative">
            <img
                src={images[currImage]}
                alt={project.title}
                className="w-full h-full object-fill rounded-xl"

            />
            {images.length > 1 &&(
                <>
                <button
                    onClick={previosImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary/40 text-background rounded-full w-8 h-8"
                >
                    ❮
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary/40 text-background rounded-full w-8 h-8"
                >
                    ❯
                </button>

                </>
            )}

        </div>
    )


}