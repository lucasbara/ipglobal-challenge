import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { DiReact } from "react-icons/di";
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
      <footer className="w-full h-20 flex justify-center items-center py-10">
        <p className="flex justify-center items-center">
          <BiCodeAlt className="mx-1" />
          with
          <AiFillHeart className="mx-1" /> by
          <a
            href="https://github.com/lucasbara"
            className="mx-1"
            target="_blank"
          >
            Lucas Barallobre
          </a>
          using
          <DiReact className="mx-1" />
        </p>
      </footer>
    </div>
  );
}
