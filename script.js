// ===============================
// Smooth Scroll Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Scroll Reveal Animation
// ===============================

const cards = document.querySelectorAll(
".about-card, .skill-card, .project-card, .contact-card"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{threshold:0.2});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(60px)";
    card.style.transition="all .8s ease";

    observer.observe(card);

});

// ===============================
// Typing Effect
// ===============================

const text = "Cloud & DevOps Enthusiast";

const heading = document.querySelector(".hero-left h2");

let i = 0;

heading.innerHTML = "";

function typing(){

    if(i < text.length){

        heading.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,80);

    }

}

typing();

// ===============================
// Navbar Shadow
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.background="rgba(11,6,22,.8)";
        header.style.boxShadow="0 10px 30px rgba(0,0,0,.3)";

    }

    else{

        header.style.background="rgba(255,255,255,.04)";
        header.style.boxShadow="none";

    }

});

// ===============================
// Button Ripple Effect
// ===============================

const buttons = document.querySelectorAll(".btn,.btn-outline");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="scale(1.05)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="scale(1)";

    });

});

// ===============================
// Floating Blur Animation
// ===============================

const blurOne = document.querySelector(".one");
const blurTwo = document.querySelector(".two");

window.addEventListener("mousemove",(e)=>{

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    blurOne.style.transform =
    `translate(${x*40}px,${y*40}px)`;

    blurTwo.style.transform =
    `translate(${-x*40}px,${-y*40}px)`;

});

// ===============================
// Project Card Tilt Effect
// ===============================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = -(y - rect.height/2)/18;

        const rotateY = (x - rect.width/2)/18;

        card.style.transform=
        `perspective(800px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform=
        "perspective(800px) rotateX(0) rotateY(0)";

    });

});

// ===============================
// Current Year
// ===============================

const footer = document.querySelector("footer");

footer.innerHTML =
`© ${new Date().getFullYear()} Khushi Bhatt • All Rights Reserved`;