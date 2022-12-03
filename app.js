const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const fexaA = document.querySelector('.fexaA');
const fexaB = document.querySelector('.fexaB');
const fexaC = document.querySelector('.fexaC');
const fexaD = document.querySelector('.fexaD');
const fexaE = document.querySelector('.fexaE');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
fexaA.addEventListener('click',close)
fexaB.addEventListener('click',close)
fexaC.addEventListener('click',close)
fexaD.addEventListener('click',close)
fexaE.addEventListener('click',close)



function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close() {
    mainMenu.style.top = '-100%';
}

//function valida() {
//    if (document.getElementById('audioOn').checked) {
//        document.getElementById('audioLigado').style.display = 'block';
//        document.getElementById('audioDesligado').style.display = 'none';
//        document.getElementById('videoBanner').setAttribute('muted',false)
//    } else {
//        document.getElementById('audioLigado').style.display = 'none';
//        document.getElementById('audioDesligado').style.display = 'block';
//        document.getElementById('videoBanner').removeAttribute("muted",true);
//    }
//}



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hiddenL');
hiddenElements.forEach((el) => observer.observe(el));

const observerB = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElementsB = document.querySelectorAll('.hiddenR');
hiddenElementsB.forEach((el) => observerB.observe(el));


const observerC = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElementsC = document.querySelectorAll('.hiddenImg');
hiddenElementsC.forEach((el) => observerC.observe(el));