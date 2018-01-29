<template>
  <div>
    <section class="breadcrumb uk-margin-medium-bottom">
      <div class="uk-container">
        <ul class="uk-breadcrumb">
          <li><nuxt-link to="/">home</nuxt-link></li>
          <li><b>Berita</b></li>
        </ul>
      </div>
    </section>
    <section class="">
      <div class="uk-container">
        <div uk-grid>
          <article v-for="news in NewsData" :key="news.id" class="uk-width-1-3@m">
            <h4>
              <nuxt-link :to="'berita/'+news.slug">
                {{news.title.rendered}}
              </nuxt-link>
            </h4>
            <div>{{news.date}}</div>
            <div v-html="news.excerpt.rendered"></div>
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
        axios.get('http://dpp-cms-dev.myteknomedia.com/wp-json/wp/v2/posts/')
          .then(response => {
            this.NewsData = response.data
          })
      }
    }
  }
</script>