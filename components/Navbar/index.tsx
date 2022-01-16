import type { FC } from "react";
import { CONFIG } from "@libs/config";
import { FaDiscord } from "react-icons/fa";
export const Navbar: FC = function () {
  return (
    <div>
      <div className="visible md:invisible my-4 h-12">
        <div className="flex justify-between">
          <img
            className="w-14 h-14"
            src="https://media.discordapp.net/attachments/882998307868250183/909003876030627850/1636793015270.png?width=671&height=671"
          />
          <a href="https://discord.gg/tzrF8ucYQe">
            <FaDiscord className="w-12 h-12 text-[#5865F2] mr-2" />
          </a>
        </div>
      </div>
      <div className="invisible md:visible flex justify-center h-4 md:h-24 md:-my-10">
        <div className="items-center w-9/12 ">
          <div className="flex w-full justify-between">
            <div className="flex items-center">
              <img
                src="https://media.discordapp.net/attachments/882998307868250183/909003876030627850/1636793015270.png?width=671&height=671"
                alt=""
                className="w-14 h-auto"
              />
              <div className="flex ml-10 text-opacity-60  text-white">
                {CONFIG.NAVBAR_LIST.map((r) => (
                  <a
                    href={r.href}
                    className="mr-5 hover:text-opacity-100 transition"
                  >
                    {r.title}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center text-white font-medium">
              <button className="bg-signupColor w-40 h-11 rounded-md mr-5">
                Sign Up
              </button>
              <button className="bg-lbColor w-40 h-11  rounded-md">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
