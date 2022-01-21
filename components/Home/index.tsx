import type { FC } from "react";

import { NavbarPc } from "../NavbarPc";
import { NavbarPhone } from "../NavbarPhone";

import { Main } from "@components/Main";
import { MainPhone } from "@components/MainPhone";

import { AboutOne } from "@components/About/one";
import { AboutTwo } from "@components/About/two";

import icon from "@public/icon.svg";
import { MdArrowForward } from "react-icons/md";




import { useState, useEffect } from "react";

export const HomePage = function () {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });
  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      var  handleResize = function() {
        return setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  if(windowSize && windowSize.width > 1000){
    return (
      <div>
        <NavbarPc />
        <Main />
        <AboutOne />
        <AboutTwo />
      </div>
    )
  }
  return (
    <div>
      <NavbarPhone />
      <MainPhone />
      <AboutOne />
      <AboutTwo />
    </div>
  )


}