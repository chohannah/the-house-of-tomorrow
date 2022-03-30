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
  // 1. 버튼에 .is-active 더하기
  // 2. icon-bookmark-filled로 아이콘 변경
  // 3. 카운트 숫자 값을 변경
  const [icon, countSpan] = this.children
  const count = Number(countSpan.innerText.replaceAll(',', ''))

  let newCount = count

  if (this.classList.contains('is-active')) {
    // NOTE: 활성화가 된 상태 -> 비활성화 시켜야 됨 (.ic-bookmark) -> -1 해줘야함
    icon.classList.add('ic-bookmark')
    icon.classList.remove('ic-bookmark-filled')
    newCount = newCount - 1
  } else {
    // NOTE: 비활성화 된 상태 -> 활성화 시켜야 됨 (.ic-bookmark-filled ) -> +1 해줘야함
    icon.classList.add('ic-bookmark-filled')
    icon.classList.remove('ic-bookmark')
    newCount = newCount + 1
  }

  countSpan.innerText = newCount.toLocaleString

  this.classList.toggle('is-active')
}

orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark)
