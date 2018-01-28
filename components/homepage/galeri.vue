<template>
  <section class="dp-galery-front">
    <div class="uk-container">
      <h3 class="dp-heading uk-text-center">Galeri Kegiatan</h3>
      <div class="dp-divider uk-margin-medium-bottom"></div>

      <div class="uk-child-width-1-3@m uk-grid" uk-grid uk-lightbox="animation: fade">
        <div v-for="list in GaleriData" :key="list.id">
          <a class="uk-inline" data-type="image" :href="list.gallery_images[0].file" :caption="list.gallery_images[0].caption">
            <img :src="list.gallery_images[0].file" :alt="list.gallery_images[0].alternative_text">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        GaleriData: []
      }
    },

    mounted () {
      this.getGaleri()
    },

    methods: {
      getGaleri () {
        axios.get('http://dpp-cms-dev.myteknomedia.com/wp-json/wp/v2/posts/?_embed&filter[category_name]=Foto')
          .then(response => {
            this.GaleriData = response.data
            console.log('galeri ~>', response.data)
          })
      }
    }
  }
</script>