import type { FC } from "react";
import { Navbar } from "../Navbar";
export const HomePage: FC = function () {
  return (
    <div className="w-screen h-screen bg-Bgnavbar">
        <Navbar />
        <div className="flex justify-center items-center">
          <div className="w-9/12 mt-20 text-white">
            <p className="font-semibold text-4xl">Reponse</p>
            <p className="font-normal text-2xl mt-2">Send messages, not personal data</p>
            <p className="text-gray-400 mt-2">As Reponse, we do NOT sell or collect your <br/> personal information. Join
              250,000 people <br/>  using Reponse worldwide!
            </p>
            <img src="assets/" alt="" />
          </div>
        </div>
      </div>
  );
}
