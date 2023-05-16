import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Layout } from "@/layouts/Layout";
import { useMovies } from "@/hooks/useMovies";
import { useSessionId } from "@/hooks/useSessionId";
import { Button } from "@/components/Button";
import { MoviesList } from "@/components/MoviesList";
import { TextField } from "@/components/TextField";
import { LoadingSpinner } from "@/components/LoadingSpinner";

let searchTimeout: NodeJS.Timeout;

export function Home() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { isLoading, movies, totalPages } = useMovies(page, search);

  const { sessionId } = useSessionId();

  const onNextPage = () => {
    setPage(page + 1);
  };

  const onPreviousPage = () => {
    setPage(page - 1);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      setSearch(event.target.value);
    }, 500);
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <TextField
          name="search"
          onChange={onChange}
          placeholder="Search..."
          value={search}
        />
      </div>
      <section className="relative min-h-[80vh] h-full w-full flex-col justify-between items-start">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {movies.length ? (
              <>
                <MoviesList movies={movies} showRating={false} />
              </>
            ) : (
              <p className="h-[50%] flex items-center justify-center">
                No movies found.
              </p>
            )}
          </>
        )}
        {!isLoading && movies.length && (
          <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center p-2 pt-5">
            <Button
              disabled={page === 1}
              onClick={onPreviousPage}
              type="button"
              variant="primary"
            >
              <MdKeyboardArrowLeft className="text-xl" />
              Previous
            </Button>
            <Button
              disabled={page === totalPages}
              onClick={onNextPage}
              type="button"
              variant="primary"
            >
              Next
              <MdKeyboardArrowRight className="text-xl" />
            </Button>
          </div>
        )}
      </section>
    </Layout>
  );
}
