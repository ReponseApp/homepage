import { FC } from "react";
export const AboutOne: FC = () => {
  return (
    <div className="py-14 md:mt-0 mt-20 flex justify-center items-center">
      <div className="md:w-9/12  items-center  text-white flex flex-col-reverse md:justify-between md:flex-row">
        <div className="w-8/12">
          <h1 className="text-center md:text-left text-4xl md:text-4xl font-bold">
            Communication has never been this easy{" "}
          </h1>
          <br />
          <p className="text-center md:text-left md:text-xl text-2xl md:text-3xl text-gray-400 font-extralight">
            Create text channels,voice channels and categories to make a great
            looking server for your community without paying anything
          </p>
        </div>
        <img className="md:w-[43rem] w-9/12 h-3/5" src="./assets/about.png" />
      </div>
    </div>
  );
};
