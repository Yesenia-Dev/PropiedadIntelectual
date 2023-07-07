function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
}

document.getElementById("open_nav").addEventListener("click", (ev) => {
  openNav();
});

document.getElementById("close-nav").addEventListener("click", (ev) => {
  closeNav();
  var audio1 = document.getElementById('audio1');
  var audio2 = document.getElementById('audio2');
  var audio3 = document.getElementById('audio3');
  var audio4 = document.getElementById('audio4');
  var audio5 = document.getElementById('audio5');
  var audio6 = document.getElementById('audio6');
  var audio7 = document.getElementById('audio7');
  var audio8 = document.getElementById('audio8');
  var audio9 = document.getElementById('audio9');
  audio1.pause();
  audio2.pause();
  audio3.pause();
  audio4.pause();
  audio5.pause();
  audio6.pause();
  audio7.pause();
  audio8.pause();
  audio9.pause();
  audio1.currentTime = 0;
  audio2.currentTime = 0;
  audio3.currentTime = 0;
  audio4.currentTime = 0;
  audio5.currentTime = 0;
  audio6.currentTime = 0;
  audio7.currentTime = 0;
  audio8.currentTime = 0;
  audio9.currentTime = 0;
});

document.getElementById("ante_icon").addEventListener("click", (ev) => {
  const navWidth = document.getElementById("mySidenav").style.width;
  if (navWidth === "" || navWidth === "0px") {
    openNav();
  } else {
    closeNav();
    /*var audio1 = document.getElementById('audio1');
    var audio2 = document.getElementById('audio2');
    var audio3 = document.getElementById('audio3');
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio1.currentTime = 0;
    audio2.currentTime = 0;
    audio3.currentTime = 0;*/
  }
});
