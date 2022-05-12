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
    newCount = newCount - 1
  } else {
    newCount = newCount + 1
  }

  countSpan.innerText = newCount.toLocaleString()
  countSpan.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()}회`)
  icon.classList.toggle('ic-bookmark')
  icon.classList.toggle('ic-bookmark-filled')
  this.classList.toggle('is-active')
}

orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark)
