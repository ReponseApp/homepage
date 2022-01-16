import type { FC } from "react";
import { Navbar } from "../Navbar";
import icon from "@public/icon.svg";
import { MdArrowForward } from "react-icons/md";
import { Main } from "@components/Main";
import { About } from "@components/About";
import { Info } from "@components/İnfo";
import { Footer } from "@components/Footer";

export const HomePage: FC = function () {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <Main />
      <About />
      <Info />
      <Footer />
    </div>
  );
};
