<template>
  <div>
    <section class="breadcrumb uk-margin-medium-bottom">
      <div class="uk-container">
        <ul class="uk-breadcrumb">
          <li><nuxt-link to="/">home</nuxt-link></li>
          <li><b>Pengumuman</b></li>
        </ul>
      </div>
    </section>
    <section class="">
      <div class="uk-container">
        <div uk-grid>
          <article v-for="news in NewsData" :key="news.id" class="uk-width-1-3@m">
            <h4>
              <nuxt-link :to="'/pengumuman/' + news.slug">
                {{news.title.rendered}}
              </nuxt-link>
            </h4>
            <div>
              <small>{{news.date}}</small>
            </div>
            <div v-html="news.content.rendered"></div>
          </article>
        </div>
      </div>
    </section>
    <div class="uk-padding"></div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        NewsData: []
      }
    },

    mounted () {
      this.getNews()
    },

    methods: {
      getNews () {
        axios.get('http://dpp-cms-dev.myteknomedia.com/wp-json/wp/v2/posts/?_embed&filter[category_name]=Pengumuman')
          .then(response => {
            this.NewsData = response.data
          })
      }
    }
  }
</script>