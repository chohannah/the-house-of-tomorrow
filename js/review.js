const reviewLikeButton = document.querySelector('.review-card-footer button')

const HELPFUL = '도움됨'
const NOT_HELPFUL = '도움이 돼요'
// const checkIcon = '<i class="ic-check" aria-hidden></i>'

function toggleReviewLikeButton() {
  // 1. btn의 클라스: btn-primary <-> btn-outlined
  //   2. 텍스트 변경: 도움됨 <-> 도움이 돼요
  //   3. count :N명에게 도움이 되었습니다

  const isLiked = this.classList.contains('btn-fill-primary')

  if (isLiked) {
    this.innerHTML = NOT_HELPFUL
  } else {
    this.innerText = HELPFUL

    const createIcon = document.createElement('i')
    createIcon.classList.add('ic-check')
    createIcon.setAttribute('aria-hidden', true)
    this.prepend(createIcon)
    // this.innerHTML = checkIcon + NOT_HELPFUL
  }

  this.classList.toggle('btn-fill-primary')
  this.classList.toggle('btn-outlined')
}

reviewLikeButton.addEventListener('click', toggleReviewLikeButton)
