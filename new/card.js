const track = document.querySelector(".carousel-track");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const dots = document.querySelectorAll(".dot");

let index = 0;
const totalCards = track.children.length;

const updateCarousel = () => {
    if (index >= totalCards) {
        index = totalCards - 1;
    }
    if (index < 0) {
        index = 0;
    }
    track.style.transform = `translateX(-${index * 100}%)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
};

nextBtn.addEventListener("click", () => {
    index++;
    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    index--;
    updateCarousel();
});

// Pagination click
dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => {
        index = dotIndex;
        updateCarousel();
    });
});
