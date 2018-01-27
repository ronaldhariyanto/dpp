<template>
  <div>
    <section class="breadcrumb uk-margin-medium-bottom">
      <div class="uk-container">
        <ul class="uk-breadcrumb">
          <li><nuxt-link to="/">home</nuxt-link></li>
          <li><nuxt-link to="/berita">Berita</nuxt-link></li>
          <li><b>{{newsTitle}}</b></li>
        </ul>
      </div>
    </section>
    <section class="">
      <div class="uk-container">
        <h3>{{ newsTitle }}</h3>
        <div v-html="newsContent"></div>
      </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {

    data () {
      return {
        NewsDetail: {},
        newsTitle: '',
        newsContent: ''
      }
    },

    mounted () {
      this.getNews()
    },

    methods: {
      getNews () {
        const getParams = this.$route.params.id
        const endPoint = `http://dpp-cms-dev.myteknomedia.com/wp-json/wp/v2/posts/?slug=${getParams}`
        console.log(endPoint)
        axios.get(endPoint)
          .then(response => {
            const arrayToObject = (arr) => Object.assign({}, ...arr)
            this.NewsDetail = arrayToObject(response.data)
            this.newsTitle = this.NewsDetail.title.rendered
            this.newsContent = this.NewsDetail.content.rendered
          })
      }
    }
  }
</script>
