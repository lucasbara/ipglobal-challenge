import { ReactNode } from "react";
import { Link } from "react-router-dom";
import TheMovieLogo from "@/assets/images/the-movie-logo.png";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full max-w-[80vw] mx-auto h-screen flex flex-col py-2">
      <header className="w-[100%] flex justify-between items-center px-6">
        <Link to="/">
          <img
            alt="The Movie | Logo"
            className="max-w-[100px] pt-5 ml-6"
            src={TheMovieLogo}
          />
        </Link>
        <Link className="text-hover-grey hover:underline" to="/mylist">
          Rated Movies
        </Link>
      </header>
      <main className="flex-1 p-6">{children} </main>
    </div>
  );
}
