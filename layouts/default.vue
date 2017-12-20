<template>
  <section>
    <div class="uk-offcanvas-content">
      <headerNav/>
      <nuxt/>
      <footerNav/>
    </div>
    <div id="my-id" uk-offcanvas>
      <div class="uk-offcanvas-bar">
        <button class="uk-offcanvas-close" type="button" uk-close></button>
      </div>
    </div>
  </section>
</template>

<script>
import HeaderNav from '~/components/header.vue';
import FooterNav from '~/components/footer.vue';

export default {
  components: {
    HeaderNav,
    FooterNav,
  },
};
</script>