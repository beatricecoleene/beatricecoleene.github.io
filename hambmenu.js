
document.getElementById('hamb-menu').addEventListener('click', function(){
    document.getElementById('menu').classList.toggle('show');
});

function playVideo(){
    const video= document.getElementById('media-video')
    const image= document.querySelector('media-image')

    image.style.opacity=0;
    video.style.opacity=1;
    video.style.pointerEvents= 'auto';
    video.play();
}