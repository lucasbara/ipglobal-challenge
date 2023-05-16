import { useState } from "react";
import { Layout } from "@/layouts/Layout";
import { useMovies } from "@/hooks/useMovies";
import { Button } from "@/components/Button";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { MovieCard } from "@/components/MovieCard";
import { useSessionId } from "@/hooks/useSessionId";
import { useRatedMovies } from "@/hooks/useRatedMovies";
import { MoviesList } from "@/components/MoviesList";
import { LoadingSpinner } from "@/components/LoadingSpinner";

export function RatedMovies() {
  const { sessionId } = useSessionId();

  const { isLoading, ratedMovies } = useRatedMovies(sessionId);

  return (
    <Layout>
      <section className="h-full w-full flex-col justify-center items-start">
        {isLoading ? (
          <LoadingSpinner />
        ) : ratedMovies.length ? (
          <MoviesList movies={ratedMovies} showRating />
        ) : (
          <div className="h-full flex flex-col justify-center items-center">
            <h2 className="text-xl text-light-green font-bold">
              No ratings found {"😢"}
            </h2>
            <p className="text-xl text-light-green">
              You haven't rated any movies yet.
            </p>
          </div>
        )}
      </section>
    </Layout>
  );
}
