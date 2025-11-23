document.querySelectorAll('.card').forEach(card => {
    const gridItems = card.querySelectorAll('.grid i');
    const img = card.querySelector('img');
    const projectInfo = card.querySelector('.project-info');


    gridItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            img.style.display = "none"
            projectInfo.style.display = "flex"

            const row = Math.floor(index / 4);
            const col = index % 4;

            let rotateX = 0;
            let rotateY = 0;

            // Calculate rotation based on grid position
            if (row < 2) rotateX = -8;
            else rotateX = 8;

            if (col < 2) rotateY = 8;
            else rotateY = -8;

            // Apply stronger rotation for corner cells
            if ((row === 0 || row === 3) && (col === 0 || col === 3)) {
                rotateX *= 1.5;
                rotateY *= 1.5;
            }

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        img.style.display = "block";
        projectInfo.style.display = "none";
    });
});

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});