const track = document.querySelector(".carousel-track");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const projectTitle = document.getElementById("project-title");
const projectDesc = document.getElementById("project-desc");
const dots = document.querySelectorAll(".dot");

const projects = [
    { title: "Khloris Flowershop", desc: "Sleek, modern design for your projects." },
    { title: "The Wall", desc: "Elegant UI with smooth animations." },
    { title: "LottoMoto", desc: "Fully responsive and adaptive layout." },
    { title: "SoftBot - Image BG Remover", desc: "Fully responsive and adaptive layout." }
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
