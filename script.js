let navLi = document.querySelectorAll("ul li");
navLi.forEach((item) => {
    item.addEventListener('click', ()=>{
        document.querySelector("li.activeRev").classList.remove("activeRev");
        item.classList.add('activeRev');
    })
});

let sections = document.querySelectorAll('section');
window.addEventListener('scroll', ()=>{
    let current = "";
    // console.log(pageYOffset);
    sections.forEach(section =>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop -sectionHeight /3)) {
            current = section.getAttribute('id');
        }
    })
    navLi.forEach(li =>{
        li.classList.remove('activeRev');
        if (li.classList.contains(current)) {
            li.classList.add('activeRev')
        }
    })
})

let calcScrollValue = () =>{
    let scrollProgress = document.getElementById("goTop");
    let progressvalue = document.getElementById('progress-value');
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollvalue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";        
    }
    scrollProgress.addEventListener("click", ()=>{
        document.documentElement.scrollTop = 0;
    })
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollvalue}%, #d7d7d7 ${scrollvalue}%)`
}
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

window.addEventListener('scroll', revel);

function revel(){
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 100;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('activeRev');
        }
        else {
            reveals[i].classList.add('.activeRev');
        }
    }
}