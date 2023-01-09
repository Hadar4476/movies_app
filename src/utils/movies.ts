import type { Movie, MappedMovie } from "@/interfaces/movies";

export const mapMovies = (page: number, movies: Movie[]) => {
  const mappedMovies = movies.map((m, i) => {
    const movie: MappedMovie = {
      id: m.id,
      posterImage: m.poster_path,
      title: m.original_title,
    };

    if (!i && page === 1) {
      movie.backgroundImage = m.backdrop_path;
      movie.description = m.overview;
    }

    return movie;
  });

  return mappedMovies;
};
