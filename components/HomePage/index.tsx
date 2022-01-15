import type { FC } from "react";
import { Navbar } from "./Navbar";
export const HomePage: FC = function () {
  return (
    <div>
        <Navbar />
        <div className="flex justify-center items-center">
          <div className="w-9/12 mt-20 text-white">
            <p className="font-semibold text-4xl">Reponse</p>
            <p className="font-normal text-2xl mt-2">Send messages, not personal data</p>
            <p className="text-gray-400 mt-2">
              As Reponse, we do NOT sell or collect your <br/> personal information. Join
              250,000 people <br/>  using Reponse worldwide!
            </p>
          </div>
        </div>
    </div>

    /*
    
          <div className="absolute mt-10">
        <h1 className=" font-medium text-white text-[50px]">Reponse</h1>
        <h2 className="text-white text-[40px]">Privacy done right.</h2>
        <p className="text-gray-400">
          As Reponse, we do NOT sell or collect your <br/> personal information. Join
          250,000 people <br/>  using Reponse worldwide!
        </p>
      </div>
      <div className="absolute top-[30rem] left-[10rem]">
          <h1 className="font-normal text-white text-[40px]">Follow Us</h1>
          <a href="#" className="w-8"><img src="assets/github.png" className="w-8 opacity-[0.4]" /></a>
      </div>
    </div>
    
    */
  );
};

