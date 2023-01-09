<template>
  <div class="movie-page">
    <div class="breadcrumbs">
      <RouterLink to="/">Home</RouterLink>
      <span>{{ movie.title }}</span>
    </div>
    <div class="details-1">
      <div class="inner">
        <span class="title">{{ movie.title }}</span>
        <span>profile_path</span>
        <p class="description">{{ movie.description }}</p>

        <div class="bottom">
          <div class="rating">
            <span>IMDB RATING</span>
            <span>{{ movie.rating }}</span>
          </div>
          <div class="director">
            <span>DIRECTOR</span>
            <span>{{ director }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="details-2">
      <div class="item">
        <span>Running time:</span>
        <span>{{ movie.runtime }}</span>
      </div>
      <div class="item">
        <span>Budget:</span>
        <span>${{ movie.budget }}</span>
      </div>
      <div class="item">
        <span>Revenue:</span>
        <span>${{ movie.revenue }}</span>
      </div>
    </div>
    <TheActors :actors="actors" />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { useRoute, RouterLink } from "vue-router";
  import services from "@/services";
  import type { Actor, CrewMember, MappedActor } from "@/interfaces/person";

  import TheActors from "@/components/TheActors/TheActors.vue";

  const route = useRoute();

  interface Movie {
    id: number;
    title: string;
    description: string;
    backgroundImage: string;
    posterImage: string;
    rating: number;
    runtime: number;
    budget: number;
    revenue: number;
  }

  const movie = ref({} as Movie);
  const director = ref("");
  const actors = ref<MappedActor[]>([]);

  onMounted(async () => {
    const id = +route.params?.id;

    if (id) {
      const fetchedMovieData = (await services.movieService.getMovie(id)).data;

      const fetchedMovie = {
        id: fetchedMovieData.id,
        title: fetchedMovieData.original_title,
        description: fetchedMovieData.overview,
        backgroundImage: fetchedMovieData.backdrop_path,
        posterImage: fetchedMovieData.poster_path,
        rating: fetchedMovieData.vote_average,
        runtime: fetchedMovieData.runtime,
        budget: fetchedMovieData.budget,
        revenue: fetchedMovieData.revenue,
      };

      movie.value = fetchedMovie;

      const fetchedCreditsData = (await services.movieService.getCast(id)).data;

      const directorInCrew = fetchedCreditsData.crew.find(
        (cm: CrewMember) => cm.department === "Directing"
      );

      director.value = directorInCrew.original_name;

      const mappedActors = fetchedCreditsData.cast.map((a: Actor) => {
        return {
          id: a.id,
          fullname: a.name,
          character: a.character,
          image: a.profile_path,
        };
      });

      actors.value = mappedActors;
    }
  });
</script>

<style scoped></style>
