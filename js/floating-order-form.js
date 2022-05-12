const floatingOrderFormBookmarkButton = document.querySelector(
  '.floating-order-form.order-form .button-group .btn-bookmark'
)

function toggleFloatingOrderFormBookmark() {
  const icon = this.children[0]
  this.classList.toggle('is-active')
  icon.classList.toggle('ic-bookmark')
  icon.classList.toggle('ic-bookmark-filled')
}

floatingOrderFormBookmarkButton.addEventListener(
  'click',
  toggleFloatingOrderFormBookmark
)
