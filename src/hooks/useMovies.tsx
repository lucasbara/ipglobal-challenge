import { useContext, useEffect } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { getMovies } from "@/controllers/movies";
import { MoviesContext } from "@/context/MoviesContext";
import { MoviesContextType } from "@/types/movies";

export function useMovies(page = 1, keyword = "") {
  const { dispatch, state } = useContext(MoviesContext) as MoviesContextType;
  const { isLoading, movies, totalPages } = state;

  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    dispatch({ type: "LOADING" });
    getMovies(page, keyword)
      .then((data) => {
        dispatch({ type: "GET_MOVIES", payload: data });
      })
      .catch((error) => {
        showBoundary(error);
      });
  }, [keyword, page]);

  return { isLoading, movies, totalPages };
}
