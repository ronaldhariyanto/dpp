<template>
  <section class="dp-hotnews">
    <div class="uk-container">
      <h3 class="dp-heading uk-text-center">Pengumuman Terbaru</h3>
      <div class="dp-divider uk-margin-medium-bottom"></div>
      <div class="uk-grid uk-grid-match uk-child-width-expand@s" uk-grid>
        <div v-for="list in pengumuman" :key="list.id">
          <div class="block-service_item" :uk-toggle="'target: #modal-close-' + list.id">
            <div class="block-service_item-icon">
              <i class="fa fa-bullhorn" aria-hidden="true"></i>
            </div>
            <div class="block-service_item-title">
              <h3>{{ list.title.rendered }}</h3>
            </div>
          </div>
          <div :id="'modal-close-' + list.id" uk-modal>
            <div class="uk-modal-dialog">
                <button class="uk-modal-close-default" type="button" uk-close></button>
                <div class="uk-modal-header">
                  <h4 class="uk-modal-title">{{ list.title.rendered }}</h4>
                </div>
                <div class="uk-modal-body">
                  <div v-html="list.content.rendered"></div>
                </div>
                <div class="uk-modal-footer uk-text-right">
                  <nuxt-link :to="'/pengumuman/' + list.slug" class="uk-button uk-button-primary uk-modal-close">
                    Baca lengkapnya...
                  </nuxt-link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
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

  .block-service_item {
    min-height: 250px;
    padding: 30px 30px;
    background-color: #f8f8f8;
    position: relative;
    -webkit-transition: background-color 0.5s ease-in-out;
    transition: background-color 0.5s ease-in-out;
    overflow: hidden;

    &-title h3 {
      font-size: 20px;
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
      cursor: pointer;

      h3 {
        color: #FFFFFF;
      }
    }
  }
</style>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        pengumuman: []
      }
    },

    mounted () {
      this.getPengumuman()
    },

    methods: {
      getPengumuman () {
        axios.get('http://dpp-cms-dev.myteknomedia.com/wp-json/wp/v2/posts/?_embed&filter[category_name]=Pengumuman')
          .then(response => {
            this.pengumuman = response.data
            console.log('data pengumuman ~>', response.data)
          })
      }
    }
  }
</script>