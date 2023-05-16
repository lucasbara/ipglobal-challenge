import { GenreType } from "@/types/genres";
import { API_BASE_URL, API_KEY } from "@/utils/constants";

export async function getGenres(): Promise<Array<GenreType>> {
  const response = await fetch(
    `${API_BASE_URL}genre/movie/list?api_key=${API_KEY}`
  );
  const data = await response.json();

  return data.genres as Array<GenreType>;
}
