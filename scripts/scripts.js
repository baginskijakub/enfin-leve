function changeNavbarToWhite() {
    var searchIcon = document.getElementById("search-icon");
    let navbar = document.querySelector('.navbar-container');
    let cartCounter = document.querySelector('.cart-counter');
    searchIcon.src = "icons/search-icon.svg";
    navbar.classList.remove('navbar-default');
    cartCounter.classList.remove('cart-counter-default');
}

function changeNavbarToTransparent() {
    var searchIcon = document.getElementById("search-icon");
    let navbar = document.querySelector('.navbar-container');
    let cartCounter = document.querySelector('.cart-counter');
    searchIcon.src = "icons/search-icon-white.svg";
    navbar.classList.add('navbar-default');
    cartCounter.classList.add('cart-counter-default');
}

function showNavbar()
{

    let navbar = document.querySelector('.navbar-container');

    navbar.style.top = '0';

    setTimeout(() => {
        if (window.pageYOffset != 0)
        {
                    navbar.style.top = '-80px';
        }
    }, 5000);

}


var lastScrollTop;
navbar = document.querySelector('.navbar-container');
window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop == 0){
        changeNavbarToTransparent();
    }
    
    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-80px';
    }
    
    else {
        showNavbar();
    }
    if (scrollTop > 0) {

        changeNavbarToWhite();
    }
    lastScrollTop = scrollTop;
});


