let hidden = true;

const responsiveNavButton = document.querySelector('#nav-button');
const navContainer = document.querySelector('.section-nav');

responsiveNavButton.addEventListener('click', (ev)=> {
    ev.preventDefault();

    if(!hidden) {
        navContainer.style.left = '-250px';
        hidden = true;
    } else {
        navContainer.style.left = '0px';
        hidden = false;
    }
    
});
