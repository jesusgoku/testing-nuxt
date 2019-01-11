<template>
  <section>
    <h1>News</h1>

    <ul>
      <li v-for="item in data" :key="item.id">
        <nuxt-link :to="`/news/${item.id}`">
          {{ item.id }}.- {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from 'axios';


export default {
  data() {
    return {
      data: [],

      limit: 10,
      page: 1,
    };
  },

  methods: {
    getNews() {
      return axios({
        url: 'https://jsonplaceholder.typicode.com/posts',
        params: {
          _limit: this.limit,
          _page: this.page,
        },
      })
        .then(res => res.data)
        .then(data => { this.data = data; })
        .catch(err => { console.log(err); })
      ;
    },
  },

  created() {
    this.getNews();
  },

  head: {
    title: 'News',
  },
}
</script>
