// EFFET MACHINE A ECRIRE

const texts = ["Etudiant", "Développeur Frotend","Développeur Backend"];

let speed=100;

const textElements =document.querySelector(".typewritter-text");

let textIndex=0;
let characterIndex=0;

function typewritter() {
    if (characterIndex <texts [textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex ++;

        setTimeout (typewritter, speed);
    }
    else{
        setTimeout(eraseText);
    }
}
function eraseText() {
    if(textElements.innerHTML.length>0){
        textElements.innerHTML=textElements.innerHTML.slice(0,-1);

        setTimeout(eraseText, 50);
    }
    else{
        textIndex=(textIndex +1) %texts.length;
        characterIndex=0;

        setTimeout(typewritter, 500);
    }
}
window.onload=typewritter;

// MODE SOMBRE / MODE CLAIRE 
const modeToggle = document.getElementById("mode-toggle");

const lighMode = {
    "--bg-color": "#ffffff",
    "--second-bg-color": "#fff",
    "--main-color": "#007bff",
    "--text-color": "#000000"
};
const darMode = {
    "--bg-color": "#141820",
    "--second-bg-color": "#1e2532",
    "--main-color": "#0ef",
    "--text-color": "#ffffff"
};

function applyTheme(theme){
    Object.keys(theme).forEach(property => {
        document.documentElement.style.setProperty(property, theme[property]);
    });
}
if (localStorage.getItem("theme")==="drak") {
    applyTheme(darMode);

    document.body.classList.add("dar-mode");
    modeToggle.innerHTML="💥";
}

modeToggle.addEventListener("click", function(){
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme","light");

        document.body.classList.remove("drak-mode");
        modeToggle.innerHTML = "🌙";
    }
    else {
        applyTheme(darMode);
        localStorage.setItem("theme", "drak");

        document.body.classList.add("drak-mode");
        modeToggle.innerHTML= "💥"
    };
});
const navLinks = document.querySelector(".navbar a")
navLinks.forEach(link => {link.addEventListener("click", ()=> {
    navLinks.forEachr(item => item.classList.remove (active));
    link.classList.add("active");
});
});