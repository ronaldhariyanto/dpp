<template>
  <section class="dp-front-page">
    <Slideshow/>

    <section class="dp-icons-front uk-padding-small uk-margin-medium-bottom">
      <div class="uk-container">
        <div class="uk-grid uk-grid-collapse uk-child-width-expand@s uk-text-center" uk-grid>
          <div>
            <nuxt-link to="/informasi">
              <img src="~/static/img/icon/icon-penting.svg" alt="" width="120">
              <span class="">Penting</span>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/laporan">
              <img src="~/static/img/icon/icon-daftar.svg" alt="" width="120">
              <span class="">Daftar Ulang</span>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/forum">
              <img src="~/static/img/icon/icon-forum.svg" alt="" width="120">
              <span class="">Forum</span>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/berita">
              <img src="~/static/img/icon/icon-berita.svg" alt="" width="120">
              <span class="">Berita &amp; Foto</span>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link to="/himpana">
              <img src="~/static/img/icon/icon-tanya.svg" alt="" width="120">
              <span class="">Tanya Jawab</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <Pengumuman/>

    <section class="dp-news-front uk-margin-medium-bottom">
      <div class="uk-container">
        <h3 class="dp-heading uk-text-center">Berita Dana Pensiun Pertamina</h3>
        <div class="dp-divider uk-margin-medium-bottom"></div>
        <div class="uk-grid uk-child-width-1-2@m" >
          <div class="uk-grid-item-match">
            <div class="uk-card uk-card-default">
              <div class="dp-news-front__image-large">
                <img :src="latestNewsBigImage" alt="" class="uk-width-1-1">
              </div>
              <div class="uk-card-body">
                <h4><nuxt-link :to="'berita/'+latestNewsBig.slug">{{ latestNewsBigTitle }}</nuxt-link></h4>
              </div>
            </div>
          </div>
          <div class="uk-grid-item-match">
            <div class="uk-grid uk-child-width-1-2@m" >
              <div class="uk-grid-item-match dp-news-front__small" v-for="news in latestNewsSmall">
                <div class="uk-card uk-card-default">
                  <div class="dp-news-front__image-small">
                    <img :src="hasThumbnail(news)" alt="" class="uk-width-1-1">
                  </div>
                  <div class="uk-padding-small">
                    <h4><nuxt-link :to="'berita/'+news.slug">{{news.title.rendered}}</nuxt-link></h4>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    
    <Galeri/>

    <Banner/>
  </section>
</template>

<style lang="scss">

  .dp-front-page {
    background: url('~/static/img/intro_bg.png') no-repeat right bottom;
    background-size: 100%;
  }

  .dp-icons-front {
    background-color: #f8f8f8;
  }

  .dp-icons-front span {
    display: block;
    font-size: 16px;
    color: #012f61;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    letter-spacing: -1px;
    color: #012f61;
    line-height: 1.3em;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }

  .dp-news-front {
    background: url('~/static/img/section-bg-01.png') repeat;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    padding: 60px 0;

    .uk-card {
      border: 2px solid #e0e0e0;
    }
    &__small {
      &:nth-of-type(1),
      &:nth-of-type(2) {
        margin-bottom: 15px;
      }
    }
    
    &__image {
      &-large {
        height: 400px;
        overflow: hidden;
        border-bottom: 1px solid #e0e0e0;
      }
      
      &-small {
        height: 150px;
        overflow: hidden;
        border-bottom: 1px solid #e0e0e0;
      }
    }
  }
</style>

<script>
import axios from 'axios'
import Slideshow from '~/components/slideshow.vue'
import Banner from '~/components/banner.vue'
import Pengumuman from '~/components/homepage/pengumuman.vue'
import Galeri from '~/components/homepage/galeri.vue'

export default {
  components: {
    Slideshow,
    Banner,
    Pengumuman,
    Galeri
  },

  data () {
    return {
      latestNewsBig: {},
      latestNewsBigTitle: '',
      latestNewsBigImage: [],
      latestNewsSmall: [],
      latestNewsSmallImage: []
    }
  },

  mounted () {
    this.getLatestNews()
  },

  methods: {
    hasThumbnail (post) {
      if (post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].media_details && post._embedded['wp:featuredmedia'][0].media_details.sizes) {
        return post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url
      }
    },
    async getLatestNews () {
      await axios.get('http://dpp-cms-dev.myteknomedia.com/wp-json/wp/v2/posts/?_embed&filter[category_name]=Berita&per_page=5')
        .then(response => {
          const x0 = response.data
          const x1 = x0[0]
          const x2 = x0.slice(1)
          this.latestNewsBig = x1
          this.latestNewsBigTitle = x1.title.rendered
          this.latestNewsBigImage = x1._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url
          this.latestNewsSmall = x2
          this.latestNewsSmallImage = x2
        })
    }
  }
}
</script>
