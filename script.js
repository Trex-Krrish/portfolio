let navLi = document.querySelectorAll("ul li");
navLi.forEach((item) => {
    item.addEventListener('click', ()=>{
        document.querySelector("li.active").classList.remove("active");
        item.classList.add('active');
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
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add('active')
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