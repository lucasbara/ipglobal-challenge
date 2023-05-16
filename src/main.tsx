import ReactDOM from "react-dom/client";
import "@/styles/globals.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ErrorBoundary } from "react-error-boundary";
import { Home } from "@/pages/Home";
import { MovieDetail } from "@/pages/MovieDetail";
import { RatedMovies } from "@/pages/RatedMovies";
import { Error } from "@/pages/Error";
import { NotFound } from "@/pages/NotFound";
import "react-toastify/dist/ReactToastify.css";
import { GenresContextProvider } from "@/context/GenresContext";
import { MoviesContextProvider } from "@/context/MoviesContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MoviesContextProvider>
    <GenresContextProvider>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          pauseOnHover
          theme="dark"
        />
        <ErrorBoundary FallbackComponent={Error}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/movie/:id">
              <MovieDetail />
            </Route>
            <Route path="/mylist">
              <RatedMovies />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </ErrorBoundary>
      </BrowserRouter>
    </GenresContextProvider>
  </MoviesContextProvider>
);
