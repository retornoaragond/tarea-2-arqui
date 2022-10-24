<script>
  export default {
    async asyncData({ $content, params }) {
      const movie = await $content('topmovies', params.slug).fetch()
      return { movie }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
     </div>
     <div class="six columns">
       <h4>{{movie.title}}</h4>
	   genre {{movie.genre}}</br>
	   Rank: {{movie.rank}}; Year: {{movie.year}};</br>
	   mpaa: {{movie.mpaa}}; Production cost: {{movie.production_cost}}
	 </div>
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>