import { useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/en";
import { MovieType } from "@/types/movies";
import { DATE_FORMAT } from "@/utils/constants";

dayjs.locale("en");

type MovieCardProps = {
  movie: MovieType;
  showRating: boolean;
};

export function MovieCard({ movie, showRating }: MovieCardProps) {
  const {
    id,
    original_title: originalTitle,
    poster_path: posterPath,
    release_date: releaseDate,
    rating,
  } = movie;
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = () => {
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li
      className="relative w-full min-w-[10rem] bg-gray-100 rounded-lg text-black m-5 shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="aspect-w-2 aspect-h-3">
        <img
          className="object-cover rounded-lg"
          src={`https://image.tmdb.org/t/p/w300/${posterPath}`}
          alt={originalTitle}
        />
      </div>
      {isHovered && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg transition-opacity duration-300 ease-in-out">
          <h3 className="text-white text-center capitalize font-semibold mb-2">
            {originalTitle}
          </h3>
          {showRating ? (
            <p className="text-white text-xs text-center ">
              You rated {`${rating}/10`}
            </p>
          ) : (
            <p className="text-white text-xs text-center ">
              Release date:{" "}
              <span className="">{dayjs(releaseDate).format(DATE_FORMAT)}</span>
            </p>
          )}
          <Link
            to={`/movie/${id}`}
            className="bg-white text-black px-4 py-2 mt-2 rounded-md"
          >
            See more
          </Link>
        </div>
      )}
    </li>
  );
}
