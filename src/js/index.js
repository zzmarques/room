import { data } from "./data.js"
const menuMobile = () => {
    const btnShow = document.querySelector("div.btn-hamb");
    const btnClose = document.querySelector("nav.navbar div.btn-close");
    const navbar = document.querySelector("nav.navbar");
    

    const shoeMenu = () => {
        navbar.style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';
    }

    const closeMenu = () => {
        navbar.style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
    }

    btnShow.addEventListener('click', shoeMenu);

    btnClose.addEventListener('click', closeMenu);
    
}

menuMobile();

const infos = () => {
    const btnPrevious = document.querySelector("div.btn-previous");
    const btnNext = document.querySelector("div.btn-next");
    const img = document.querySelector('figure.container-imgs img.img-main');
    const title = document.querySelector('main div.container-txt h1');
    const texto = document.querySelector('main div.container-txt p');
    const wv = window.innerWidth;
    let i = 0;

     wv >= 1024 ?  img.src = `src/assets/images/${data[0].imgDesktop}.jpg` : img.src = `src/assets/images/${data[0].imgMobile}.jpg`

    const next = () => {
        i === 2 ? '' : i++

        for (const el in data) {
            if(+el === i) {
                title.innerHTML = data[el].title;
                texto.innerHTML = data[el].texto;
                wv >= 1024 ?  img.src = `src/assets/images/${data[el].imgDesktop}.jpg` : img.src = `src/assets/images/${data[el].imgMobile}.jpg`
            }
        }

    }

    const previous = () => {
        i === 0 ? '' : i--

        for (const el in data) {
            if(+el === i) {
                title.innerHTML = data[el].title;
                texto.innerHTML = data[el].texto;
                wv >= 1024 ?  img.src = `src/assets/images/${data[el].imgDesktop}.jpg` : img.src = `src/assets/images/${data[el].imgMobile}.jpg`
            }
        }
    }

    btnNext.addEventListener('click', next);
    btnPrevious.addEventListener('click', previous);

    
}

infos();
