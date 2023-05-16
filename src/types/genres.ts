import { Dispatch } from "react";

export type GenresContextType = {
  state: GenresStateType;
  dispatch: Dispatch<GenresActionType>;
};

export type GenresStateType = {
  isLoading: boolean;
  genres: Array<GenreType>;
};

export type GenreType = {
  id: number;
  name: string;
};

export type GenresActionType = {
  type: string;
  payload?: Array<GenreType>;
};
