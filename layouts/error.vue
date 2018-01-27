<template>
  <section>
    <div class="uk-offcanvas-content">
      <div class="uk-container uk-height-viewport">
        <div class="uk-position-center uk-text-center">
          <h1 v-if="error.statusCode === 404">Halaman tidak ditemukan!</h1>
          <h1 v-else>An error occured xxx</h1>
          <nuxt-link to="/">Beranda</nuxt-link>
        </div>
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
  },
  props: ['error']
}
</script>
