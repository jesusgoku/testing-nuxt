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
import { getNews } from '../../services/backend';


export default {
  asyncData({ query, ...context }) {
    const { limit = 10, page = 1 } = query;

    return getNews({
      _limit: limit,
      _page: page,
    })
      .then(data => { console.log('DAAAATA', data); return data; })
      .then(data => ({
        data: data.map(item => item.toObject()),

        limit,
        page,
      }))
    ;
  },

  methods: {
    getNews() {
      return getNews({
          _limit: this.limit,
          _page: this.page,
      })
        .then(data => { this.data = data; })
        .catch(err => { console.log(err); })
      ;
    },
  },

  head: {
    title: 'News',
  },
}
</script>
