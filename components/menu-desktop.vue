<template>
  <ul class="uk-navbar-nav uk-visible@m">
    <li><nuxt-link to="/">Home</nuxt-link></li>
    <li>
      <nuxt-link to="/tentang-kami">Tentang Kami</nuxt-link>
      <div class="uk-navbar-dropdown">
        <ul class="uk-nav uk-navbar-dropdown-nav">
          <li><nuxt-link to="/tentang-kami/sejarah">Sejarah</nuxt-link></li>
        </ul>
      </div>
    </li>
    <li><nuxt-link to="/informasi">Informasi</nuxt-link></li>
    <li><nuxt-link to="/laporan">Laporan</nuxt-link></li>
    <li><nuxt-link to="/berita">Berita &amp; Foto</nuxt-link></li>
    <li><nuxt-link to="/hubungi">Hubungi</nuxt-link></li>
    <li><nuxt-link to="/himpana">Himpana</nuxt-link></li>
    <li><nuxt-link to="/forum">Forum</nuxt-link></li>
  </ul>
</template>