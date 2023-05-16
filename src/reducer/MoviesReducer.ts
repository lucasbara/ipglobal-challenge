import {
  MovieType,
  MoviesActionType,
  MoviesResponseType,
  MoviesStateType,
} from "@/types/movies";

export function moviesReducer(
  state: MoviesStateType,
  action: MoviesActionType
): MoviesStateType {
  switch (action.type) {
    case "GET_MOVIES":
      const { movies, totalPages } = action.payload as MoviesResponseType;
      return {
        ...state,
        isLoading: false,
        movies,
        totalPages,
      };
    case "GET_MOVIE_DETAILS":
      return {
        ...state,
        isLoading: false,
        detailedMovie: action.payload as MovieType,
      };
    case "GET_RATED_MOVIES":
      return {
        ...state,
        isLoading: false,
        ratedMovies: action.payload as Array<MovieType>,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
