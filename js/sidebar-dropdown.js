const sidebarDropdownButtonList = document.querySelectorAll(
  '.sidebar-menu .sidebar-dropdown .sidebar-dropdown-button'
)

function toggleDropdownMenu() {
  const sidebarMenu = this.parentNode
  sidebarMenu.classList.toggle('is-open')
}

sidebarDropdownButtonList.forEach(function (button) {
  button.addEventListener('click', toggleDropdownMenu)
})
