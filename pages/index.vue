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

    <section class="dp-hotnews">
      <div class="uk-container">
        <h3 class="dp-heading uk-text-center">Pengumuman Terbaru</h3>
        <div class="dp-divider uk-margin-medium-bottom"></div>
        <div class="uk-grid uk-grid-match uk-child-width-expand@s" uk-grid>
          <div>
            <div class="block-service_item ">
              <div class="block-service_item-icon"><i class="fa fa-bullhorn" aria-hidden="true"></i></div>
              <div class="block-service_item-title">
                <h3>Penipuan yang atas nama DP Pertamina</h3>
              </div>
              <div class="block-service_item-desc">
                <p>Waspada terhadap penipuan yang atas nama DP Pertamina.</p>
              </div>
              <div class="block-service_item-bgicon"><i class="fa fa-bullhorn" aria-hidden="true"></i></div>
            </div>
          </div>
          <div>
            <div class="block-service_item ">
              <div class="block-service_item-icon"><i class="fa fa-bullhorn" aria-hidden="true"></i></div>
              <div class="block-service_item-title">
                <h3>Pengalihan alamat pembayaran manfaat pensiun</h3>
              </div>
              <div class="block-service_item-desc">
                <p>Waspada terhadap penipuan yang atas nama DP Pertamina.</p>
              </div>
              <div class="block-service_item-bgicon"><i class="fa fa-bullhorn" aria-hidden="true"></i></div>
            </div>
          </div>
          <div>
            <div class="block-service_item ">
              <div class="block-service_item-icon"><i class="fa fa-bullhorn" aria-hidden="true"></i></div>
              <div class="block-service_item-title">
                <h3>Pengumuman penyesuaian MP Tahun 2017</h3>
              </div>
              <div class="block-service_item-desc">
                <p>Waspada terhadap penipuan yang atas nama DP Pertamina.</p>
              </div>
              <div class="block-service_item-bgicon"><i class="fa fa-bullhorn" aria-hidden="true"></i></div>
            </div>
          </div>
          <div>
            <div class="block-service_item ">
              <div class="block-service_item-icon"><i class="fa fa-bullhorn" aria-hidden="true"></i></div>
              <div class="block-service_item-title">
                <h3>Pengumuman kenaikan manfaat pensiun tahun 2017</h3>
              </div>
              <div class="block-service_item-desc">
                <p>Waspada terhadap penipuan yang atas nama DP Pertamina.</p>
              </div>
              <div class="block-service_item-bgicon"><i class="fa fa-bullhorn" aria-hidden="true"></i></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="dp-news-front uk-margin-medium-bottom">
      <div class="uk-container">
        <h3 class="dp-heading uk-text-center">Berita Dana Pensiun Pertamina</h3>
        <div class="dp-divider uk-margin-medium-bottom"></div>
        <div class="uk-grid uk-child-width-1-2@m" >
          <div class="uk-grid-item-match">
            <div class="uk-card uk-card-default">
              <img src="~/static/img/content/berita-01.jpg" alt="" class="uk-width-1-1">
              <div class="uk-card-body">
                <h4><nuxt-link :to="'berita/'+latestNewsBig.slug">{{ latestNewsBigTitle }}</nuxt-link></h4>
              </div>
            </div>
          </div>
          <div class="uk-grid-item-match">
            <div class="uk-grid uk-child-width-1-2@m" >
              <div class="uk-grid-item-match dp-news-front__small" v-for="news in latestNewsSmall">
                <div class="uk-card uk-card-default">
                  <div>
                    <img src="~/static/img/content/berita-02.jpg" alt="" class="uk-width-1-1">
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
    <section class="dp-galery-front">
      <div class="uk-container">
        <h3 class="dp-heading uk-text-center">Galeri Kegiatan</h3>
        <div class="dp-divider uk-margin-medium-bottom"></div>

        <div class="uk-child-width-1-3@m uk-grid" uk-grid uk-lightbox="animation: fade">
          <div>
            <a class="uk-inline" data-type="image" :href="require('~/static/img/slide/23.jpg')" caption="Caption 1">
              <img src="~/static/img/slide/23.jpg" alt="">
            </a>
          </div>
          <div>
            <a class="uk-inline" data-type="image" :href="require('~/static/img/slide/24.jpg')" caption="Caption 2">
              <img src="~/static/img/slide/24.jpg" alt="">
            </a>
          </div>
          <div>
            <a class="uk-inline" data-type="image" :href="require('~/static/img/slide/25.jpg')" caption="Caption 3">
              <img src="~/static/img/slide/25.jpg" alt="">
            </a>
          </div>
          <div>
            <a class="uk-inline" data-type="image" :href="require('~/static/img/slide/26.jpg')" caption="Caption 4">
              <img src="~/static/img/slide/26.jpg" alt="">
            </a>
          </div>
          <div>
            <a class="uk-inline" data-type="image" :href="require('~/static/img/slide/27.jpg')" caption="Caption 5">
              <img src="~/static/img/slide/27.jpg" alt="">
            </a>
          </div>
          <div>
            <a class="uk-inline" data-type="image" :href="require('~/static/img/slide/28.jpg')" caption="Caption 6">
              <img src="~/static/img/slide/28.jpg" alt="">
            </a>
          </div>
        </div>
      </div>
    </section>

    <Banner/>
  </section>
</template>

<style lang="scss">

  .dp-front-page {
    background: url('~/static/img/intro_bg.png') no-repeat right bottom;
    background-size: 100%;
  }

  .dp-hotnews {
    background: url('~/static/img/bg_industry.png') no-repeat right bottom;
    padding-bottom: 100px;
  }

  .dp-heading {
    font-family: "Montserrat", sans-serif;
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing: -1px;
    color: #012f61;
    line-height: 1.3em;
  }

  .dp-divider {
    width: 60px;
    height: 5px;
    border-top: 5px solid #2d79c4;
    position: relative;
    margin: 0 auto;
  }

  .dp-news-front {
    background: url('~/static/img/section-bg-01.png') repeat;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    padding: 60px 0;
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

  .block-service_item {
    min-height: 250px;
    padding: 30px 30px;
    background-color: #f8f8f8;
    position: relative;
    -webkit-transition: background-color 0.5s ease-in-out;
    transition: background-color 0.5s ease-in-out;
    overflow: hidden;

    &-title h3 {
      font-size: 24px;
      font-family: "Montserrat", sans-serif;
      font-weight: 800;
      line-height: 1.3em;
      color: #2d79c4;
    }

    &-icon {
      font-size: 60px;
      color: #7ac8ff;
    }

    &-bgicon {
      position: absolute;
      top: -30%;
      right: -30%;
      font-size: 200px;
      opacity: 0.1;
    }

    &-desc {
      display: none;
    }

    .button {
      letter-spacing: 0;
    }

    &:hover,
    &.active {
      background: #012f61;

      .block-service_item-desc {
        display: block;
        color: #FFFFFF;
        margin-top: 25px;
      }

      .block-service_item-icon {
        display: none;
      }

      .block-service_item-bgicon {
        opacity: 0.2;
      }

      h3 {
        color: #FFFFFF;
      }
    }
  }

  .dp-news-front {
    .uk-card {
      border: 2px solid #e0e0e0;
    }
    &__small {
      &:nth-of-type(1),
      &:nth-of-type(2) {
        margin-bottom: 15px;
      }
    }
  }
</style>

<script>
import axios from 'axios'
import Slideshow from '~/components/slideshow.vue'
import Banner from '~/components/banner.vue'

export default {
  components: {
    Slideshow,
    Banner
  },

  data () {
    return {
      latestNewsBig: {},
      latestNewsBigTitle: '',
      latestNewsSmall: []
    }
  },

  mounted () {
    this.getLatestNews()
  },

  methods: {
    async getLatestNews () {
      await axios.get('http://dpp-cms-dev.myteknomedia.com/wp-json/wp/v2/posts/?_embed&filter[category_name]=Berita&per_page=5')
        .then(response => {
          const x0 = response.data
          const x1 = x0[0]
          this.latestNewsBigTitle = x1.title.rendered
          this.latestNewsBig = x1
          const x2 = x0.slice(1)
          this.latestNewsSmall = x2
        })
    }
  }
}
</script>
