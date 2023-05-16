import { MovieCard } from "@/components/MovieCard";
import { MovieType } from "@/types/movies";

type MovieListProps = {
  movies: MovieType[];
  showRating: boolean;
};

export function MoviesList({ movies, showRating }: MovieListProps) {
  return (
    <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} showRating={showRating} />
      ))}
    </ul>
  );
}
