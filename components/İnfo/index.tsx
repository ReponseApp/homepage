import { FC } from "react";

export const Info: FC = () => {
  return (
    <div className=" py-14 flex justify-center items-center">
      <div className="md:w-9/12  items-center  text-white flex flex-col-reverse md:justify-between md:flex-row">
        <img
          className="md:w-[43rem]  mx-16 w-9/12 h-3/5 "
          src="./assets/info.png"
        />
        <div>
          <h1 className=" text-center text-3xl md:text-5xl max-w-md md:max-w-none font-bold">
            Hang out with your friends without any limitation{" "}
          </h1>
          <br />
          <p className="text-center text-2xl md:text-2xl text-gray-400 font-extralight">
            {" "}
            Unlimited amount of people can join your voice rooms. You can create
            an online event in a voice room, share your screen with them even
            open your camera and talk like a face to face conversation
          </p>
        </div>
      </div>
    </div>
  );
};
