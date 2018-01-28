<template>
  <div class="uk-position-relative uk-visible-toggle uk-light" uk-slideshow="animation: push; ratio: 7:2">
    <ul class="uk-slideshow-items">
      <template  v-for="slide in slider">
        <li :key="slide.id">
          <img :src=slide.file alt="" uk-cover>
          <div class="uk-position-center-left uk-position-large">
            <div class="dp-slide-box uk-padding uk-width-5-6">
              <h2 uk-slideshow-parallax="x: 100,-100">{{ slide.title }}</h2>
              <p uk-slideshow-parallax="x: 200,-200" class="uk-visible@m">{{ slide.text }}</p>
              <a :href=slide.link class="uk-button uk-button-primary uk-margin-small-top uk-visible@m">view more</a>
            </div>
          </div>
        </li>
      </template>
    </ul>
    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
  </div>
</template>

<style lang="scss">
  .dp-slide-box {
    background-color: rgba(0,0,0,0.3);
    border-radius: 10px;

    h2 {
      font-weight: 400;
      font-size: 32px;
      line-height: 1;
    }

    p {
      font-size: 16px;
    }

    .uk-button {
      background-color: #ffae00;
      color: #0a0a0a;
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      border-radius: 5px;

      &:hover {
        background-color: #cc8b00;
        color: #0a0a0a;
      }
    }
  }
</style>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        slider: []
      }
    },

    mounted () {
      this.getSlider()
    },

    methods: {
      getSlider () {
        axios.get('http://dpp-cms-dev.myteknomedia.com/wp-json/wp/v2/pages?_embed&slug=home')
          .then(response => {
            this.slider = response.data[0].slides
            console.log('data slider ~>', response.data[0].slides)
          })
      }
    }
  }
</script>
