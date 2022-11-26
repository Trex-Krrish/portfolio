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