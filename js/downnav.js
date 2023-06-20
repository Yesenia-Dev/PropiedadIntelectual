const bottomSidedrawer = document.querySelector('#myBottomnav');
const openBottomButton = document.querySelector('#open_bottomnav');
const closeBottomButton = document.querySelector('#close-downnav');

openBottomButton.addEventListener('click', function() {
  bottomSidedrawer.classList.add('open');
});

closeBottomButton.addEventListener('click', function() {
  bottomSidedrawer.classList.remove('open');
});

const sidebarList = document.getElementById("sidebar-list");

// Función para agregar la clase y ocultar el texto del sidebar
function hideSidebarText() {
  sidebarList.classList.add("sidebar-text");
}

// Función para eliminar la clase y mostrar el texto del sidebar
function showSidebarText() {
  sidebarList.classList.remove("sidebar-text");
}

// Evento al hacer clic en el botón para abrir el sidebar desde abajo
openBottomButton.addEventListener("click", function() {
  hideSidebarText();
});

// Evento al hacer clic en el botón para cerrar el sidebar desde abajo
closeBottomButton.addEventListener("click", function() {
  showSidebarText();
});