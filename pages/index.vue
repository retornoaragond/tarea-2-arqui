<script>
  export default {
    async asyncData({ $content }) {
      const movies = await $content('topmovies').fetch()
      return {
        movies
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Top 500 Movies by Production Budget</h3>
     <p>These are the top 500 films by production budget, as judged by The Numbers.</p>
   <ul>
     <li v-for="movie in movies" :key="movie.slug">
       <NuxtLink :to="{ name: 'movies-slug', params: { slug: movie.slug } }">{{movie.tittle}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>