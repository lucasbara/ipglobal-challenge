import { createContext, ReactNode, useReducer } from "react";
import { genresReducer } from "@/reducer/GenresReducer";
import { GenresContextType, GenresStateType } from "@/types/genres";

export const GenresContext = createContext<GenresContextType | null>(null);

const initialState: GenresStateType = {
  isLoading: false,
  genres: [],
};

type GenresContextProviderProps = {
  children: ReactNode;
};

export function GenresContextProvider({
  children,
}: GenresContextProviderProps) {
  const [state, dispatch] = useReducer(genresReducer, initialState);

  return (
    <GenresContext.Provider value={{ state, dispatch }}>
      {children}
    </GenresContext.Provider>
  );
}
