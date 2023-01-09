<template>
  <div class="the-movies">
    <h1>Popular Movies</h1>
    <RouterLink
      v-for="movie in moviesStore.movies"
      :key="movie.id"
      :to="`/movie/${movie.id}`"
    >
      <img
        :src="`${config.imagesUrl}${movie.posterImage}`"
        :alt="movie.title"
      />
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
  import { RouterLink } from "vue-router";
  import config from "@/config";
  import useMoviesStore from "@/stores/movies";

  const moviesStore = useMoviesStore();
</script>

<style scoped></style>
