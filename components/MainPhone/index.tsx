import { FC } from "react";

export const MainPhone: FC = () => {
  return (
    <div className="mt-10 flex justify-center items-center">
    <div className="w-9/12">
      <div className="">
      <img src="assets/reponse.png" alt="" className="rounded-xl drop-shadow-xl"/>
        <div className="mt-10">
          <p className="font-semibold text-white text-left text-4xl 2xl:text-4xl md:text-3xl">
            Reponse
          </p>
          <p className="font-light text-gray-200 text-2xl leading-[2rem]">
              Send Messages, Not Personal Data.
          </p>
          <p className="text-gray-400 text-left 2xl:text-3xl md:text-2x max-w-lg">
            As Reponse, we do NOT sell or collect your personal information.
            Join 250,000 people using Reponse worldwide!
          </p>
          <div className="text-white mt-5 flex">
            <button className="bg-[#2260DA] h-12 px-8 font-medium rounded-full py-2">
              Launch
            </button>
            <button className="bg-[#1BC27C] ml-2 h-12 px-12 font-medium rounded-full py-2">
              Get Started
            </button>
          </div>
        </div>
      </div>
      </div>
  </div>    


    /*
        <div className="flex justify-center items-center">
      <div className="w-9/12">
        <div className="lg:my-12 flex flex-col-reverse md:justify-between md:flex-row">
          <div className="2xl:px-2 2xl:my-auto md:my-auto">
            <p className="font-semibold text-white text-left text-xl 2xl:text-4xl md:text-3xl">
              Reponse
              <br />
              <span className="2xl:text-4xl md:text-3xl font-light">
                Send Messages, Not Personal Data.
              </span>
            </p>
            <p className="text-gray-400 text-left 2xl:text-3xl md:text-2x mt-2 max-w-lg">
              As Reponse, we do NOT sell or collect your personal information.
              Join 250,000 people using Reponse worldwide!
            </p>
            <div className="text-white">
              <button className="bg-[#2260DA]  px-14 font-medium rounded-full py-2">
                Launch
              </button>
              <button className=" my-4 md:mx-4 bg-[#1BC27C] px-14 font-medium rounded-full py-2">
                Get Started
              </button>
            </div>
          </div>
          <div className="2xl:mr-28">
            <img
              className="md:w-[30rem] invisible md:h-auto 2xl:w-[39rem] 2xl:h-[41rem]"
              src="./assets/background.png"
            />
            <img
              className="mb-50 2xl:w-[47rem] w-4/6 md:w-[32rem] absolute 2xl:top-64 items-center md:top-60 shadow-xl rounded-md"
              src="./assets/reponse.png"
            />
          </div>
        </div>
        </div>
    </div>    
    */

    /*

     <div className="md:w-9/12 my-20 items-center text-white flex flex-col-reverse md:justify-between md:flex-row">
        <div className="my-16 md:mx-16 -py-5">
          <p className=" font-semibold text-center text-4xl">
            Reponse
            <br />
            <span className="text-4xl font-light">
              Send Messages, Not Personal Data.
            </span>
          </p>
          <p className="text-gray-400 text-center text-3xl mt-2 max-w-lg">
            As Reponse, we do NOT sell or collect your personal information.
            Join 250,000 people using Reponse worldwide!
          </p>
          <div className="py-4 md:mx-14">
            <button className="bg-[#2260DA]  px-14 font-medium rounded-full py-2">
              Launch
            </button>
            <button className=" my-4 md:mx-4 bg-[#1BC27C] px-14 font-medium rounded-full py-2">
              Get Started
            </button>
          </div>
        </div>
        <div>
          <img
            className="-my-16 md:w-[39rem] md:h-[41rem] md:-my-14"
            src="./assets/background.png"
          />
          <img
            className="top-48 md:w-[46rem] absolute  md:top-60 shadow-xl rounded-md"
            src="./assets/reponse.png"
          />
        </div>
      </div>

*/
  );
};
