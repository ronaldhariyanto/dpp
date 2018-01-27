<template>
  <footer>
    <div class="dp-footer">
      <div class="uk-container uk-padding">
        <div class="" uk-grid>
          <div class="uk-width-1-6@m">
            <div class="dp-footer-logo">
              <img src="~/static/img/logo-dpp.png" alt="">
              <span class="uk-margin-small-top dp-footer-logo__title">Dana Pensiun</span>
              <span class="uk-margin-small-bottom dp-footer-logo__subtitle">Pertamina</span>
            </div>
          </div>
          <div class="uk-width-1-4@m">
            <div class="">
              <h4>Contact Us</h4>
              <p>{{ SiteInfo.contact_us_address }}</p>
              <ul class="uk-list">
                <li>Phone: {{ SiteInfo.contact_us_phone }}</li>
                <li>Fax: {{ SiteInfo.contact_us_fax }}</li>
              </ul>
            </div>
          </div>
          <template v-for="menu in footerNav">
            <div class="uk-width-1-6@m">
              <div class="">
                <h4>{{ menu.title }}</h4>
                <ul class="uk-list">
                  <li v-for="list in menu.children" :key="list.ID">
                    <nuxt-link :to=list.url>{{ list.title }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </template>
          <div class="uk-width-1-4@m">
            <h4>Follow us on:</h4>
            <div class="uk-flex">
              <a :href=SiteInfo.social_media_twitter class="uk-margin-small-right" >
                <span uk-icon="icon: twitter; ratio: 1.2"></span>
              </a>
              <a :href=SiteInfo.social_media_facebook class="uk-margin-small-right">
                <span uk-icon="icon: facebook; ratio: 1.2"></span>
              </a>
              <a :href=SiteInfo.social_media_google class="">
                <span uk-icon="icon: google-plus; ratio: 1.2"></span>
              </a>
            </div>
            <div class="uk-margin-medium-top">
              <a href="http://www.ojk.go.id/" target="_blank" class="uk-display-block">
                <img src="~/static/img/logo-ojk.png" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dp-footer__copyright ">
      <div class="container uk-text-center uk-padding-small">
        Copyright &copy; {{currentYears}} Dana Pensiun Pertamina. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
  .dp-footer {
    background-color: #002042;
    color: #7ac8ff;

    h4 {
      color:  #2d79c4;
    }

    a {
      color:  #fff;
    }

    &-logo {
    text-align: center;

      img {
        height: 60px;
      }

      &__title {
        display: block;
        text-transform: uppercase;
        font-weight: 600;
        line-height: 1;
        color: red;
        font-size: 14px;
      }

      &__subtitle {
        display: block;
        text-transform: uppercase;
        font-weight: 600;
        line-height: 1;
        color: #fff;
        font-size: 1.3em;
        line-height: 1.3;
      }
    }

    &__copyright {
      background: #002042;
      color: #7ac8ff;
      font-size: 90%;
      border-top: 1px dotted #024793;
    }
  }
</style>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        footerNav: [],
        SiteInfo: {},
        currentYears: new Date().getFullYear()
      }
    },

    mounted () {
      this.getFooterMenu()
      this.getSiteInfo()
    },

    methods: {
      getFooterMenu () {
        axios.get('http://dpp-cms-dev.myteknomedia.com/wp-json/wp-api-menus/v2/menu-locations/main-footer-nav')
          .then(response => {
            this.footerNav = response.data
          })
      },
      getSiteInfo () {
        axios.get('http://dpp-cms-dev.myteknomedia.com/wp-json/wp/v2/setting')
          .then(response => {
            this.SiteInfo = response.data
          })
      }
    }
  }
</script>
