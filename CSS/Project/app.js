document.addEventListener('DOMContentLoaded', () => {
    const mainPlayBtn = document.getElementById('main-play-btn');
    let isPlaying = false;

    mainPlayBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        if (isPlaying) {
            mainPlayBtn.outerHTML = '<i class="fa-solid fa-circle-pause" id="main-play-btn" style="font-size: 2.2rem; cursor: pointer; transition: transform 0.2s; margin: 0 1rem;" onmouseover="this.style.transform=\'scale(1.1)\'" onmouseout="this.style.transform=\'scale(1)\'"></i>';
            document.getElementById('main-play-btn').addEventListener('click', togglePlay);
        }
    });

    function togglePlay(e) {
        isPlaying = !isPlaying;
        const btn = e.target;
        if (isPlaying) {
            btn.classList.remove('fa-circle-play');
            btn.classList.add('fa-circle-pause');
        } else {
            btn.classList.remove('fa-circle-pause');
            btn.classList.add('fa-circle-play');
        }
    }

    if(mainPlayBtn.tagName.toLowerCase() === 'img') {
        const playHTML = '<i class="fa-solid fa-circle-play" id="main-play-btn" style="font-size: 2.2rem; cursor: pointer; transition: transform 0.2s; margin: 0 1rem;" onmouseover="this.style.transform=\'scale(1.1)\'" onmouseout="this.style.transform=\'scale(1)\'"></i>';
        mainPlayBtn.outerHTML = playHTML;
        document.getElementById('main-play-btn').addEventListener('click', togglePlay);
    }

    const likeBtn = document.getElementById('like-btn');
    let isLiked = false;

    likeBtn.addEventListener('click', () => {
        isLiked = !isLiked;
        if (isLiked) {
            likeBtn.style.filter = 'invert(47%) sepia(85%) saturate(1478%) hue-rotate(107deg) brightness(96%) contrast(88%)';
            likeBtn.style.transform = 'scale(1.1)';
        } else {
            likeBtn.style.filter = 'none';
            likeBtn.style.transform = 'scale(1)';
        }
    });

    const openMenuBtn = document.getElementById('open-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenuBar = document.getElementById('mobile-menu-bar');

    if (openMenuBtn && closeMenuBtn && mobileMenuBar) {
        openMenuBtn.addEventListener('click', () => {
            mobileMenuBar.classList.add('menu-bar-open');
        });

        closeMenuBtn.addEventListener('click', () => {
            mobileMenuBar.classList.remove('menu-bar-open');
        });
    }
});
