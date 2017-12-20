<template>
  <nav class="uk-navbar-container uk-navbar uk-container" uk-navbar>
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
</template>