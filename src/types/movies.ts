import { Dispatch } from "react";

export type MoviesContextType = {
  state: MoviesStateType;
  dispatch: Dispatch<MoviesActionType>;
};

export type MoviesStateType = {
  detailedMovie: MovieType | null;
  isLoading: boolean;
  movies: Array<MovieType>;
  ratedMovies: Array<MovieType>;
  totalPages: number;
};

export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  rating?: number;
};

export type MoviesActionType = {
  type: string;
  payload?:
    | boolean
    | Array<MovieType>
    | MovieType
    | number
    | MoviesResponseType;
};

export type MoviesResponseType = {
  movies: Array<MovieType>;
  totalPages: number;
};

export type MovieRateResponseType = {
  status_code: number;
  success: boolean;
  status_message: string;
};
