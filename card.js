const track = document.querySelector(".carousel-track");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const projectTitle = document.getElementById("project-title");
const projectDesc = document.getElementById("project-desc");
const gh = document.getElementById("gh");
const dots = document.querySelectorAll(".dot");

const projects = [
    { 
        title: "Khloris Flowershop", 
        desc: "Programming Languages: HTML, CSS, JavaScript, MySQL, PHP\nAn ecommerce platform where customers can order readymade and customized bouquets.\nImplemented some of the database connection, backend, and frontend(for customization part) development.",
        link:"https://github.com/louisecalix/khloris_ecommerce" 
    },
    { 
        title: "The Wall", 
        desc: "Programming Languages: JavaScript, Node.js (for backend development)\nDeveloped backend logic for user authentication, admin authorization, groups, posts, and comments.\nImplemented API endpoints for real-time updates." ,
        link: "https://github.com/college-of-mary-immaculate/The-Wall-SPA"
    },
    { 
        title: "LottoMoto", 
        desc: "Programming Languages: JavaScript, Node.js (backend development)\nOptimized database management for efficient lottery draw processing.\nIntegrated real-time updates for lottery results using Socket.io." ,
        link:"https://github.com/college-of-mary-immaculate/LottoMoto"
    },
    { 
        title: "SoftBot - Image BG Remover", 
        desc: "Programming Languages: Python\nDeveloped an automated tool for removing backgrounds from images and converting JPG to PNG format with transparency.\nImplemented the image processing logic using the removebg package for background removal." ,
        link:"https://github.com/college-of-mary-immaculate/background-image-remover-changer-and-pngconverter-withcam"
    },
    {
        title: "New York Times Dupe",
        desc: "Programming Languages: HTML, CSS, JavaScript\nDesigned a digital replica of a classic newspaper using custom typography, layouts, and grayscale tones.\nFetched real-time articles from the NYT API while maintaining an old-school print aesthetic.",
        link: "https://beatricecoleene.github.io/nyt/nyt.html"
    }
    
];


let index = 0;
const totalCards = track.children.length;

const updateCarousel = () => {
    // Ensure index stays within bounds
    if (index >= totalCards) index = 0;
    if (index < 0) index = totalCards - 1;

    // Move the carousel
    track.style.transform = `translateX(-${index * 100}%)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");

    // Update project title & description
    projectTitle.textContent = projects[index].title;
    projectDesc.textContent = projects[index].desc;
    gh.href = projects[index].link;
};

// Event Listeners for Navigation
nextBtn.addEventListener("click", () => {
    index++;
    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    index--;
    updateCarousel();
});

// Pagination Click
dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => {
        index = dotIndex;
        updateCarousel();
    });
});

// Initialize first project info
updateCarousel();


function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
