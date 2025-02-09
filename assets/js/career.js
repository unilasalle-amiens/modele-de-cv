document.addEventListener('DOMContentLoaded', function () {
    let sidebarHeight = document.querySelector('.sidebar').offsetHeight;

    function updateHeights() {
        sidebarHeight = document.querySelector('.sidebar').offsetHeight;

        if (window.location.hash) {
            scrollToElement(window.location.hash);
        }
    }

    function scrollToElement(hash) {
        const decodedHash = decodeURIComponent(hash);
        const targetElement = document.querySelector(decodedHash);
        if (targetElement) {
            let offset = targetElement.offsetTop;
            if (window.innerWidth < 769) {
                offset -= sidebarHeight;
            }
            window.scrollTo({
                top: offset
            });
        }
    }

    if (window.location.hash) {
        scrollToElement(window.location.hash);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            scrollToElement(this.getAttribute('href'));
        });
    });

    window.addEventListener('resize', updateHeights);
});

document.getElementById('displayCV').addEventListener('click', async () => {
    document.querySelector('.modal').style.display = 'flex';
    document.querySelector('.overlay').style.display = 'flex';
});

document.querySelector('.overlay').addEventListener('click', closeModal);
document.querySelector('.close').addEventListener('click', closeModal);

function closeModal() {
    document.querySelector('.modal').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}