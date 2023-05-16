import { useContext, useEffect } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { GenresContext } from "@/context/GenresContext";
import { getGenres } from "@/controllers/genres";
import { GenresContextType } from "@/types/genres";

export function useGenres(page = 1, keyword = "") {
  const { dispatch, state } = useContext(GenresContext) as GenresContextType;
  const { genres, isLoading } = state;

  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    dispatch({ type: "LOADING" });
    getGenres()
      .then((data) => {
        dispatch({ type: "GET_GENRES", payload: data });
      })
      .catch((error) => {
        showBoundary(error);
      });
  }, [keyword, page]);

  return { isLoading, genres };
}
