import { FC } from "react";

export const Main: FC = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="flex w-9/12 justify-between">

        <div className="flex w-5/12 justify-center">
          <div className="mt-5">
            <p className="font-semibold text-white text-left text-xl 2xl:text-4xl md:text-4xl">
              Reponse
              <br />
              <span className="2xl:text-4xl md:text-2xl text-gray-300 font-light">
                Send Messages, Not Personal Data.
              </span>
            </p>
            <p className="text-gray-400 text-left 2xl:text-3xl md:text-2x mt-2 max-w-lg">
              As Reponse, we do NOT sell or collect your personal information.
              Join 250,000 people using Reponse worldwide!
            </p>
            <div className="text-white">
              <button className="bg-[#2260DA] drop-shadow-xl px-14 font-medium rounded-full py-2">
                Launch
              </button>
              <button className=" my-4 md:mx-4 bg-[#1BC27C] px-14 font-medium rounded-full py-2">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="flex w-6/12">
          <img src="assets/reponse.png" alt="" className="drop-shadow-lg rounded-xl" />
        </div>

      </div>
    </div>    


/*
    <div className="w-9/12">
      <div className="lg:my-4 flex flex-col-reverse md:justify-between md:flex-row">
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
        <div className="2xl:mr-28 -mt-20">
          <img
            className="md:w-[30rem] mt-10 md:h-auto 2xl:w-[39rem] 2xl:h-[41rem]"
            src="./assets/background.png"
          />
          <img
            className="mb-50 2xl:w-[47rem] w-4/6 md:w-[32rem] absolute 2xl:top-64 items-center md:top-60 shadow-xl rounded-md"
            src="./assets/reponse.png"
          />
        </div>
      </div>
      </div>
*/

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
