import { isAxiosError } from "axios";
import { ref } from "vue";
import { defineStore } from "pinia";
import useGlobal from "../hooks/global";
import services from "../services";
import type { MoviesResponse, MappedMovie } from "@/interfaces/movies";
import { mapMovies } from "@/utils/movies";

const useMoviesStore = defineStore("movies", () => {
  const global = useGlobal();

  const movies = ref<MappedMovie[]>([]);
  const page = ref(1);

  const initMovies = async () => {
    global.setLoading();

    try {
      const response: MoviesResponse = (
        await services.movieService.getPopular({ page: page.value })
      ).data;

      const mappedMovies = mapMovies(page.value, response.results);

      movies.value = mappedMovies;
    } catch (error) {
      const errorMessage = isAxiosError(error)
        ? error.message
        : "Unexpected error";
      global.setError(errorMessage);
    }

    global.setFinished();
  };

  const loadMore = async () => {
    page.value++;
    global.setLoading();

    try {
      const response: MoviesResponse = (
        await services.movieService.getPopular({ page: page.value })
      ).data;

      const mappedMovies = mapMovies(page.value, response.results);

      movies.value.push(...mappedMovies);
    } catch (error) {
      const errorMessage = isAxiosError(error)
        ? error.message
        : "Unexpected error";
      global.setError(errorMessage);
    }

    global.setFinished();
  };

  const searchMovie = async (query: string) => {
    page.value = 1;
    global.setLoading();

    try {
      const response: MoviesResponse = (
        await services.searchService.searchMovie({ query })
      ).data;

      const mappedMovies = mapMovies(page.value, response.results);

      movies.value = mappedMovies;
    } catch (error) {
      const errorMessage = isAxiosError(error)
        ? error.message
        : "Unexpected error";
      global.setError(errorMessage);
    }

    global.setFinished();
  };

  return { movies, initMovies, loadMore, searchMovie };
});

export default useMoviesStore;
