# The House of Tomorrow(내일의 집)

## Login & Logout Status: 로그인 했을 때 & 로그인 안 했을 때

### 1. GNB

- 로그인 안 했을 때

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>
  <a
    class="gnb-icon-button is-cart"
    href="/"
    aria-label="장바구니로 페이지로 이동"
  >
    <i class="ic-cart"></i>
  </a>
  <div class="gnb-auth sm-hidden">
    <a href="/">로그인</a>
    <a href="/">회원가입</a>
  </div>
</div>
```

- 로그인 했을 때

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>

  <a
    class="gnb-icon-button sm-hidden"
    href="/"
    aria-label="스크랩북 페이지로 이동"
  >
    <i class="ic-bookmark"></i>
  </a>

  <a
    class="gnb-icon-button sm-hidden"
    href="/"
    aria-label="내 소식 페이지로 이동"
  >
    <i class="ic-bell"></i>
  </a>

  <a
    class="gnb-icon-button is-cart"
    href="/"
    aria-label="장바구니로 페이지로 이동"
  >
    <i class="ic-cart"></i>
    <strong class="badge" aria-label="장바구니에 상품이 5개 담겨 있습니다"
      >5</strong
    >
  </a>

  <button
    class="gnb-avatar-button sm-hidden"
    type="button"
    aria-label="마이 메뉴 열기 버튼"
  >
    <div class="avatar-32">
      <img
        src="https://static.wikia.nocookie.net/characters/images/1/19/Sally_Fantasia.jpg"
        alt="User image"
      />
    </div>
  </button>
</div>
```

### 2. Sidebar

#### 2-1. User avatar & user name

- 로그인 했을 때

```html
<div class="sidebar-user">
  <a href="/">
    <div class="avatar-24">
      <img src="./assets/images/img-user-01.jpg" alt="User image" />
    </div>
    <strong class="user-name">
      조지 거슈윈 조지 거슈윈 조지 거슈윈 조지 거슈윈 조지 거슈윈 조지 거슈윈
    </strong></a
  >
</div>
```

- 로그인 안 했을 때

```html
<div class="sidebar-auth">
  <a href="/" class="btn-outlined btn-40">로그인</a>
  <a href="/" class="btn-fill-primary btn-40">회원가입</a>
</div>
```

#### 2-2. My menu

- 로그인 했을 때

```html
<div class="sidebar-menu-my">
  <ul class="sidebar-menu-my-list">
    <li class="sidebar-menu-my-list-item">
      <a href="/">마이페이지</a>
    </li>
    <li class="sidebar-menu-my-list-item">
      <a href="/">나의 쇼핑</a>
    </li>
    <li class="sidebar-menu-my-list-item">
      <a href="/">스크랩북</a>
    </li>
    <li class="sidebar-menu-my-list-item">
      <a href="/">알림</a>
    </li>
    <li class="sidebar-menu-my-list-item">
      <a href="/">이벤트 </a>
    </li>
  </ul>
</div>
```

- 로그인 안 했을 때: none
