gsap.registerPlugin(ScrollTrigger);

// Custom Cursor Logic
const cursor = document.querySelector('.custom-cursor');
const hoverElements = document.querySelectorAll('[data-hover="true"]');

if (window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// Sticky Nav Blur
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Editorial Reveal Animations
const revealElements = document.querySelectorAll('.gs-reveal');
revealElements.forEach(el => {
    gsap.fromTo(el, 
        { y: 50, opacity: 0 },
        {
            y: 0, opacity: 1, duration: 1, ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        }
    );
});

// Project Reveal Animations
const projects = document.querySelectorAll('.gs-project');
projects.forEach(project => {
    const visual = project.querySelector('.project-visual');
    const info = project.querySelector('.project-info');

    gsap.fromTo(visual,
        { scale: 0.95, opacity: 0, y: 30 },
        {
            scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
            scrollTrigger: {
                trigger: project,
                start: "top 75%",
            }
        }
    );

    gsap.fromTo(info,
        { x: project.classList.contains('reverse') ? -30 : 30, opacity: 0 },
        {
            x: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out",
            scrollTrigger: {
                trigger: project,
                start: "top 75%",
            }
        }
    );
});
