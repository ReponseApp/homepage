import { FC } from "react";
export const About: FC = () => {
  return (
    <div className="py-14 flex justify-center items-center">
      <div className="  md:w-9/12  items-center  text-white flex flex-col-reverse md:justify-between md:flex-row">
        <div className="w-8/12">
          <h1 className="text-center md:text-left text-4xl md:text-5xl max-w-md md:max-w-none font-bold">
            Communication is never been easy{" "}
          </h1>
          <br />
          <p className="md:mx-2 text-center md:text-left text-2xl md:text-3xl text-gray-400 font-extralight">
            {" "}
            Create text channels,voice channels and categories to make a great
            looking server for your community without paying anything
          </p>
        </div>
        <img className="md:w-[43rem]  w-9/12 h-3/5 " src="./assets/about.png" />
      </div>
    </div>
  );
};
