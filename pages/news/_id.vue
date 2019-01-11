<template>
  <section>
    <h1>{{ data.title }}</h1>

    <div>{{ data.body }}</div>
  </section>
</template>

<script>
import axios from 'axios';


export default {
  asyncData({ params, ...context }) {
    const { id } = params;

    return axios({
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    })
      .then(res => res.data)
      .then(data => ({ data }))
    ;
  },

  head() {
    return {
      title: this.data.title,
    };
  },
}
</script>

