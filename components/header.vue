<template>
  <section>
    <div class="dp-header">
      <div class="uk-container">
        <div class="dp-logo">
          <img src="~/static/img/logo-dp-header.png" alt="">
          <span class="dp-logo__title">Dana Pensiun
            <b class="dp-logo__subtitle">Pertamina</b>
          </span>
        </div>
      </div>
    </div>
    <div class="dp-navbar">
      <nav class="uk-container uk-navbar-container uk-navbar-transparent uk-navbar" uk-navbar>
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/tentang-kami">Tentang Kami</nuxt-link></li>
            <li><nuxt-link to="/informasi">Informasi</nuxt-link></li>
            <li><nuxt-link to="/laporan">Laporan</nuxt-link></li>
            <li><nuxt-link to="/berita">Berita &amp; Foto</nuxt-link></li>
            <li><nuxt-link to="/hubungi">Hubungi</nuxt-link></li>
            <li><nuxt-link to="/himpana">Himpana</nuxt-link></li>
            <li><nuxt-link to="/forum">Forum</nuxt-link></li>
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

<style lang="scss">
  .dp-header {
    padding-top: 15px;
    background-color: #012f61;
    padding-bottom: 20px;
  }

  .dp-navbar {
    background-color: #2d79c4;
  }

  .dp-logo {
    display: flex;
    align-items: center;
    justify-content: center;

    &__title {
      display: block;
      color: #fff;
      margin-left: 15px;
      font-size: 18px;
      text-transform: uppercase;
      font-weight: 600;
      line-height: 1.2;
      letter-spacing: 0.5px;
    }

    &__subtitle {
      display: block;
      font-weight: 600;
      font-size: 1.3em;
      letter-spacing: 1.8px;
      line-height: 1;
      color: red;
    }
  }
</style>