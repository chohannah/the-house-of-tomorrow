const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children
console.log(orderCtaBuyButton, orderCtaBookmarkButton)

const orderFormModal = document.querySelector('.order-form-modal')
const orderFormModalOverlay = document.querySelector('.overlay')

orderCtaBuyButton.addEventListener('click', function () {
  orderFormModal.classList.add('is-open')
  orderFormModalOverlay.classList.add('is-active')
})

orderFormModalOverlay.addEventListener('click', function () {
  orderFormModal.classList.remove('is-open')
  orderFormModalOverlay.classList.remove('is-active')
})
