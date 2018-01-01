<template>
  <section>
    <div class="uk-offcanvas-content">
      <headerNav/>
      <nuxt/>
      <footerNav/>
    </div>
    <div id="offcanvas-nav" uk-offcanvas="overlay: true">
      <div class="uk-offcanvas-bar">
        <div class="dp-logo-mobile uk-hidden@m">
          <img src="~/static/img/logo-dp-header.png" alt="">
          <span class="dp-logo-mobile__title">Dana Pensiun
            <b class="dp-logo-mobile__subtitle">Pertamina</b>
          </span>
        </div>
        <button class="uk-offcanvas-close" type="button" uk-close></button>
        <MenuMobile/>
      </div>
    </div>
  </section>
</template>

<script>
import HeaderNav from '~/components/header.vue'
import FooterNav from '~/components/footer.vue'
import MenuMobile from '~/components/menu-mobile.vue'

export default {
  components: {
    HeaderNav,
    FooterNav,
    MenuMobile
  }
}
</script>