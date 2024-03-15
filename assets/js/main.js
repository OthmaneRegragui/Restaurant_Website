function scrollToSection(scrollDown) {
    const offset = scrollDown ? window.innerHeight : -window.innerHeight;
    window.scrollBy({
        top: offset,
        behavior: 'smooth'
    });
}
const video = document.getElementById('backgroundVideo');
let currentVideoIndex = 0;

video.addEventListener('ended', playNextVideo);

function playNextVideo() {
    video.style.opacity = 0;

    setTimeout(() => {
        currentVideoIndex = (currentVideoIndex + 1) % video.children.length;
        video.src = video.children[currentVideoIndex].src;
        video.play();

        video.style.opacity = 1;
    }, 500);
}