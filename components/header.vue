<template>
  <section class="dp-header">
    <div class="uk-container">
      <div class="">
        <a href="#" class="dp-logo">
          <img src="~/static/img/logo-dp-header.png" alt="">
          <span class="dp-logo__title">Dana Pensiun
            <b class="dp-logo__subtitle">Pertamina</b>
          </span>
        </a>
      </div>
      <nav class="uk-navbar-container uk-navbar-transparent uk-navbar" uk-navbar>
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li class="uk-active"><a href="">Home</a></li>
            <li class="uk-parent"><a href="">Tentang Kami</a></li>
            <li><a href="">Informasi</a></li>
            <li>
              <a href="#">Laporan</a>
              <div class="uk-navbar-dropdown">
                <ul class="uk-nav uk-navbar-dropdown-nav">
                  <li class="uk-active"><a href="#">Laporan 01</a></li>
                  <li><a href="#">Laporan 02</a></li>
                  <li><a href="#">Laporan 03</a></li>
                </ul>
              </div>
            </li>
            <li><a href="">Berita &amp; Foto</a></li>
            <li><a href="">Hubungi</a></li>
            <li><a href="">Himapa</a></li>
            <li><a href="">Forum</a></li>
          </ul>
        </div>
        <div class="uk-navbar-right">
          <div class="uk-navbar-item">
            <form class="uk-search uk-search-default">
              <span uk-search-icon></span>
              <input class="uk-search-input" type="search" placeholder="Search...">
            </form>
          </div>
        </div>
        <a href="#my-id" uk-toggle></a>
      </nav>
    </div>
  </section>
</template>

<style>
  .dp-header {
    padding-top: 15px;
    background-color: #0547af;
  }

  a.dp-logo {
    display: flex;
    align-items: center;
    justify-content: center;
}


  span.dp-logo__title {
    display: block;
    color: #fff;
    margin-left: 15px;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: 0.5px;
}
  b.dp-logo__subtitle {
    display: block;
    font-weight: 600;
    font-size: 1.3em;
    letter-spacing: 1.8px;
    line-height: 1;
    color: red;
}



</style>