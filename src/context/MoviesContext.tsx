import { createContext, ReactNode, useReducer } from "react";
import { moviesReducer } from "@/reducer/MoviesReducer";
import {
  MoviesContextType,
  MoviesStateType,
  MoviesActionType,
} from "@/types/movies";

export const MoviesContext = createContext<MoviesContextType | null>(null);

const initialState: MoviesStateType = {
  detailedMovie: null,
  isLoading: false,
  movies: [],
  ratedMovies: [],
  totalPages: 1,
};

type MoviesContextProviderProps = {
  children: ReactNode;
};

export function MoviesContextProvider({
  children,
}: MoviesContextProviderProps) {
  const [state, dispatch] = useReducer(moviesReducer, initialState);

  return (
    <MoviesContext.Provider value={{ state, dispatch }}>
      {children}
    </MoviesContext.Provider>
  );
}
