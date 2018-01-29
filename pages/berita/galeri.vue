<template>
  <div>
    <section class="breadcrumb uk-margin-small-bottom">
      <div class="uk-container">
        <ul class="uk-breadcrumb">
          <li><nuxt-link to="/">home</nuxt-link></li>
          <li><nuxt-link to="/berita">Berita</nuxt-link></li>
          <li><b>Foto</b></li>
        </ul>
      </div>
    </section>
    <div class="uk-container">
      <div class="uk-grid uk-grid-medium" uk-grid>
        <div class="uk-width-expand@m">
          <div class="uk-card uk-card-default uk-card-body">
            <h1>Galeri Foto</h1>
            <div class="uk-grid">
              <div>
                <div v-for="galeri in allFoto">
                  <h3>{{ galeri.title.rendered }}</h3>
                  <div class="uk-child-width-1-3@m uk-grid" uk-grid uk-lightbox="animation: fade">
                    <div v-for="foto in galeri.gallery_images">
                      <h4>{{ foto.title }}</h4>
                      <a class="uk-inline" data-type="image" :href="foto.file" :caption="foto.caption">
                        <img :src="foto.file" :alt="foto.alternative_text">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="uk-width-1-3@m">
          <div class="uk-card uk-card-default uk-card-body">Item</div>
        </div>
      </div>
    </div>
    <div class="uk-padding"></div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {

    data () {
      return {
        allFoto: []
      }
    },

    mounted () {
      this.getPhoto()
    },

    methods: {
      getPhoto () {
        const endPoint = `http://dpp-cms-dev.myteknomedia.com/wp-json/wp/v2/posts/?_embed&filter[category_name]=Foto`
        axios.get(endPoint)
          .then(response => {
            this.allFoto = response.data
          })
      }
    }
  }
</script>
