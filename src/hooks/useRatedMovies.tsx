import { useContext, useEffect } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { getRatedMovies } from "@/controllers/movies";
import { MoviesContext } from "@/context/MoviesContext";
import { MoviesContextType } from "@/types/movies";

export function useRatedMovies(sessionId: string) {
  const { dispatch, state } = useContext(MoviesContext) as MoviesContextType;
  const { isLoading, ratedMovies } = state;

  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    dispatch({ type: "LOADING" });
    getRatedMovies(sessionId)
      .then((data) => {
        dispatch({ type: "GET_RATED_MOVIES", payload: data });
      })
      .catch((error) => {
        showBoundary(error);
      });
  }, [sessionId]);

  return { isLoading, ratedMovies };
}
