const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children

const orderFormModal = document.querySelector('.order-form-modal')
const orderFormModalOverlay = document.querySelector('.overlay')

function openOrderFormModal() {
  orderFormModal.classList.add('is-open')
  orderFormModalOverlay.classList.add('is-active')
}

orderCtaBuyButton.addEventListener('click', openOrderFormModal)

function closeOrderFormModal() {
  orderFormModal.classList.remove('is-open')
  orderFormModalOverlay.classList.remove('is-active')
}

orderFormModalOverlay.addEventListener('click', closeOrderFormModal)

function toggleOrderCtaBookmark() {
  const [icon, countSpan] = this.children
  const count = Number(countSpan.innerText.replaceAll(',', ''))

  let newCount = count

  if (this.classList.contains('is-active')) {
    icon.setAttribute('class', 'ic-bookmark')
    newCount = newCount - 1
  } else {
    icon.setAttribute('class', 'ic-bookmark-filled')
    newCount = newCount + 1
  }

  countSpan.innerText = newCount.toLocaleString()
  countSpan.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()}회`)

  this.classList.toggle('is-active')
}

orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark)
