import React from "react";
import { Link } from "react-router-dom";
import NavbarLogo from "../assets/logo.png";
import Masuk from "../Elements/Button/Masuk";
import Footer from "../components/Footer";
import NotFound from "../assets/404_NotFound.png";
const NotFoundPages = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto max-w-[1200px] px-4 md:px-6 lg:px-10 py-4 flex justify-between items-center">
          <Link to="/" className="block">
            <img
              src={NavbarLogo}
              alt="Logo Video Belajar"
              className="h-6 md:h-8"
            />
          </Link>
        </div>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center">
        <img
          src={NotFound}
          alt="404NotFoundImage"
          className="w-1/2 md:w-1/4 xl:w-1/6"
        />
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p>It looks like something is missing!</p>
        <Link
          to="/"
          className="px-4 py-2 text-red-500 rounded-md focus:outline-none"
        >
          <Masuk className="w-full bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded-md">
            Back to Homepage
          </Masuk>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPages;
