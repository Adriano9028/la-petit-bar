
let navBar = document.querySelector('#header')

document.addEventListener("scroll",  ()=>{
    let scrolltop =window.scrollY

    if(scrolltop > 0){
        navBar.classList.add('rolar')
    } else {
        navBar.classList.remove('rolar')
    }

})

function menuShow(){
let menuMobile = document.querySelector('.menu-mobile');
if (menuMobile.classList.contains('open')){
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src ="imagem/menu_white_36dp.svg";
}else{
    menuMobile.classList.add('open');
     document.querySelector('.icon').src ="imagem/close_white_36dp.svg";
}

}