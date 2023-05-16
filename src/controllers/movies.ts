import {
  MovieRateResponseType,
  MovieType,
  MoviesResponseType,
} from "@/types/movies";
import { API_BASE_URL, API_KEY } from "@/utils/constants";

export async function getMovies(
  page = 1,
  keyword = ""
): Promise<MoviesResponseType> {
  const url = keyword
    ? `${API_BASE_URL}search/movie?api_key=${API_KEY}&query=${keyword}&page=${page}`
    : `${API_BASE_URL}movie/popular?api_key=${API_KEY}&page=${page}`;

  const response = await fetch(url);
  const data = await response.json();

  return {
    movies: data.results,
    totalPages: data.total_pages,
  } as MoviesResponseType;
}

export async function getMovieDetails(id: number): Promise<MovieType> {
  const response = await fetch(`${API_BASE_URL}movie/${id}?api_key=${API_KEY}`);
  const data = await response.json();

  return data as MovieType;
}

export async function getSessionId(): Promise<string> {
  const response = await fetch(
    `${API_BASE_URL}authentication/guest_session/new?api_key=${API_KEY}`
  );
  const data = await response.json();

  return data.guest_session_id as string;
}

export async function rateMovie(
  idMovie: number,
  value: number,
  sessionId: string
): Promise<MovieRateResponseType> {
  const body = { value };

  const response = await fetch(
    `${API_BASE_URL}movie/${idMovie}/rating?api_key=${API_KEY}&guest_session_id=${sessionId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(body),
    }
  );
  const data = await response.json();

  return data as MovieRateResponseType;
}

export async function getRatedMovies(
  sessionId: string
): Promise<Array<MovieType>> {
  const response = await fetch(
    `${API_BASE_URL}guest_session/${sessionId}/rated/movies?api_key=${API_KEY}`
  );
  const data = await response.json();

  return data.results as Array<MovieType>;
}
