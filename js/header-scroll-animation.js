addEventListener('scroll',(ev)=> {

    if(window.scrollY < 250 ) {
        setHeaderOpacity('100%')
        return 0;
    };
    setHeaderOpacity('50%');
})

function setHeaderOpacity(value) {
    document.querySelector('.header').style.opacity = value;
}