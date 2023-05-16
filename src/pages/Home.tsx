import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Layout } from "@/layouts/Layout";
import { useMovies } from "@/hooks/useMovies";
import { Button } from "@/components/Button";
import { MoviesList } from "@/components/MoviesList";
import { TextField } from "@/components/TextField";
import { LoadingSpinner } from "@/components/LoadingSpinner";

let searchTimeout: NodeJS.Timeout;

export function Home() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { isLoading, movies, totalPages } = useMovies(page, search);

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
      <section className="min-h-[100vh] h-full w-full flex-col justify-center items-start">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <MoviesList movies={movies} showRating={false} />
            <div className="w-full flex justify-center items-center p-2 mt-10">
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
          </>
        )}
      </section>
    </Layout>
  );
}
