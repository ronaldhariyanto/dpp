<template>
  <div class="dp-banner uk-height-large uk-overflow-hidden uk-light uk-flex uk-flex-top">
    <div class="uk-container uk-margin-medium-top">
      <div>
        <img src="~/static/img/contoh-banner.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  h1.dp-banner__title {
    color: #012f61;
  }
  .dp-banner {
    &__title {
      font-family: "Montserrat", sans-serif;
      font-size: 50px;
      font-weight: 600;
      letter-spacing: -1px;
      line-height: 1.3em;
    }

    &__subtitle {
      background-color: #002042;
      padding: 30px;
      color: #7ac8ff;
      font-size: 18px;

      b {
        color: #fff;
        font-weight: 400;
      }
    }
  }
</style>