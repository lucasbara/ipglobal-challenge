import { GenresActionType, GenresStateType } from "@/types/genres";

export function genresReducer(
  state: GenresStateType,
  action: GenresActionType
): GenresStateType {
  switch (action.type) {
    case "GET_GENRES":
      return {
        ...state,
        isLoading: false,
        genres: action.payload,
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
