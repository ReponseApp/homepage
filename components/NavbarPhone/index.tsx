import type { FC } from "react";
import { CONFIG } from "@libs/config";
import { FaDiscord } from "react-icons/fa";
export const NavbarPhone: FC = function () {
  return (
    <div>
      <div className="visible md:invisible my-4 h-12">
        <div className="flex justify-between">
          <img
            className="w-14 h-14"
            src="https://media.discordapp.net/attachments/882998307868250183/909003876030627850/1636793015270.png?width=671&height=671"
          />
          <a href="https://discord.gg/tzrF8ucYQe">
          </a>
        </div>
      </div>
    </div>
  );
};
