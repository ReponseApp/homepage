import type {FC} from "react"
import { CONFIG } from "@libs/config"

export const Navbar:FC = function() {
    return (
      <div className="flex justify-center">
        <div className="items-center w-9/12 mt-10">
          <div className="flex w-full justify-between">
            <div className="flex items-center">
              <img src="assets/pinklogo.png" alt="" className="w-14 h-auto" />
              <div className="flex ml-10 text-opacity-60  text-white">
                  {CONFIG.NAVBAR_LIST.map(r => (
                    <a href={r.href} className="mr-5 hover:text-opacity-100 transition">{r.title}</a>
                  ))}
              </div>
            </div>
            <div className="flex items-center text-white font-medium">
              <button className="bg-signupColor w-40 h-11 rounded-lg mr-5">Sign Up</button>
              <button className="bg-lbColor w-40 h-11  rounded-lg" >Login</button>
            </div>
          </div>
        </div>
      </div>
    )
  }