
const images = import.meta.glob(
    "../assets/**/*.{png,jpg,jpeg,webp}",
    {
        eager:true,
        import:"default"

    }

);


export function getProjectImages(folder){
    return Object.entries(images)
    .filter(([path]) => path.includes(`/${folder}/`))
    .map(([, image])=> image)
    .sort();

        
}