const myMenu = document.querySelector('.my-menu')
const myMenuButton = myMenu.querySelector('.my-menu-button')

function closeMenuOnClickingOutside(e) {
  console.log('WINDOW!!!!')

  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active')
    window.removeEventListener('click', closeMenuOnClickingOutside)
  }
}

function toggleMyMenu() {
  if (!myMenu.classList.contains('is-active')) {
    window.addEventListener('click', closeMenuOnClickingOutside)
  }
  myMenu.classList.toggle('is-active')
}

myMenu.addEventListener('click', toggleMyMenu)
