<template>
  <div class="homepage">
    <SearchBar />
    <TheMovies />
    <button @click="onLoadMore">Load More</button>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from "vue";
  import useMoviesStore from "@/stores/movies";
  import SearchBar from "@/components/SearchBar/SearchBar.vue";
  import TheMovies from "@/components/TheMovies/TheMovies.vue";

  const moviesStore = useMoviesStore();

  onMounted(async () => {
    await moviesStore.initMovies();
  });

  const onLoadMore = async () => {
    await moviesStore.loadMore();
  };
</script>

<style scoped></style>
