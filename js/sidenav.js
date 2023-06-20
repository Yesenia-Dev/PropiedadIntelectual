// Código para el side drawer izquierdo
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
});

document.getElementById("ante_icon").addEventListener("click", (ev) => {
  const navWidth = document.getElementById("mySidenav").style.width;
  if (navWidth === "" || navWidth === "0px") {
    openNav();
  } else {
    closeNav();
  }
});
