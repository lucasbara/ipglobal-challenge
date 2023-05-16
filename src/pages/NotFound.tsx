import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Layout } from "@/layouts/Layout";

export function NotFound() {
  return (
    <Layout>
      <section className="w-full h-full flex flex-col justify-center items-center">
        <h2 className="text-[10rem] text-light-green font-bold">404</h2>
        <h2 className="font-bold">Page not found</h2>
        <p>
          The movie you're looking for seems to have disappeared into the void.
        </p>

        <Link
          className="h-10 w-[10%] flex justify-between items-center mx-2 text-white bg-grey border-light-green hover:bg-light-green p-2 rounded-lg cursor-pointer border transition duration-300 ease-out mt-10"
          to="/"
        >
          <MdKeyboardArrowLeft className="text-xl mr-2" />
          Go back
        </Link>
      </section>
    </Layout>
  );
}
