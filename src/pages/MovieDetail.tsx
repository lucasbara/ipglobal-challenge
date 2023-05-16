import { useContext, useState } from "react";
import { MoviesContext } from "@/context/MoviesContext";
import { Link, useParams } from "react-router-dom";
import { Layout } from "@/layouts/Layout";
import {
  MdCalendarToday,
  MdKeyboardArrowLeft,
  MdStarRate,
  MdStar,
  MdTrendingUp,
} from "react-icons/md";
import { useGenres } from "@/hooks/useGenres";
import { rateMovie } from "@/controllers/movies";
import { useSessionId } from "@/hooks/useSessionId";
import { Rating } from "@/components/Rating";
import { useRatedMovies } from "@/hooks/useRatedMovies";
import { MoviesContextType, MovieType } from "@/types/movies";
import { toast } from "react-toastify";
import { LoadingSpinner } from "@/components/LoadingSpinner";

export function MovieDetail() {
  const { state } = useContext(MoviesContext) as MoviesContextType;
  const { isLoading, movies } = state;

  const { genres: allGenres } = useGenres();
  const { sessionId } = useSessionId();
  const { ratedMovies } = useRatedMovies(sessionId);

  const { id } = useParams<{ id: string }>();

  const movie = movies.find((movie: MovieType) => movie.id === Number(id));
  const isRated = ratedMovies.find(
    (movie: MovieType) => movie.id === Number(id)
  );

  const [vote, setVote] = useState(isRated ? isRated.rating : 0);
  const [hasVoted, setHasVoted] = useState(isRated ? true : false);

  const {
    genre_ids: genreIds,
    id: movieId,
    overview,
    popularity,
    poster_path: posterPath,
    release_date: releaseDate,
    title,
    vote_average: voteAverage,
  } = movie as MovieType;

  const genres = allGenres.filter((genre) => genreIds.includes(genre.id));

  const onRate = async (value: number): Promise<void> => {
    setVote(value);

    try {
      const res = await rateMovie(movieId, value, sessionId);

      if (res.success) {
        setHasVoted(true);
        toast.success(`You rated ${title} with ${value} stars!`);
      } else toast.error(res.status_message);
    } catch (error) {
      toast.error("An error occurred while rating the movie.");
    }
  };

  return (
    <Layout>
      <section className="h-full w-full flex flex-col items-center justify-center">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="container mx-auto p-4">
            <div className="lg:w-1/3 flex items-start justify-start mb-4">
              <Link
                to="/"
                className="flex justify-center items-center  text-primary text-lg"
              >
                <MdKeyboardArrowLeft className="text-xl mr-1" />
                <p>Go back</p>
              </Link>
            </div>
            <div className="w-full lg:w-auto flex flex-col lg:flex-row">
              <div className="w-full flex items-center justify-center lg:w-1/3">
                <img
                  className="object-cover rounded-lg"
                  src={`https://image.tmdb.org/t/p/w300/${posterPath}`}
                  alt={title}
                />
              </div>
              <div className="w-full lg:w-2/3 lg:pl-8">
                <div className="flex flex-col md:flex-row items-center justify-between lg:justify-start lg:items-start mb-2">
                  <h2 className="text-4xl font-bold mb-4 whitespace-nowrap">
                    {title}
                  </h2>

                  <div className="flex items-center ml-4">
                    {genres.map((genre) => (
                      <div
                        key={genre.id}
                        className="px-2 py-1 rounded-full text-gray-700 border-light-green border-2 ml-2 mb-2"
                      >
                        {genre.name}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-start">
                  <div className="flex items-center">
                    <div className="flex items-center mr-4">
                      <MdCalendarToday className="mr-1" />
                      <p className="text-gray-600">{releaseDate}</p>
                    </div>
                    <div className="flex items-center mr-4">
                      <MdTrendingUp className="mr-1" />
                      <p className="text-gray-600">{popularity}</p>
                    </div>
                    <div className="flex items-center">
                      <MdStarRate className="mr-1" />
                      <p className="text-gray-600">{voteAverage}</p>
                    </div>
                  </div>
                </div>
                <hr className="border-light-grey my-4" />
                <p className="text-gray-600 mb-4">{overview}</p>
              </div>
            </div>
            <div className="flex justify-end items-end">
              <Rating
                value={vote as number}
                onClick={onRate}
                readonly={hasVoted}
              />
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}
