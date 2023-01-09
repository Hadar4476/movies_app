<template>
  <div class="search-bar">
    <input type="text" v-model="searchValue" @keypress="onSearchMovie" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import useMoviesStore from "@/stores/movies";

  const moviesStore = useMoviesStore();

  const searchValue = ref("");

  const onSearchMovie = async (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      await moviesStore.searchMovie(searchValue.value);
    }
  };
</script>

<style scoped></style>
