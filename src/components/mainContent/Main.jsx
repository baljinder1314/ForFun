import React from "react";
import Cards from "../itamCards/Cards";
function Main() {
  return (
    <div>
      <p className="text-3xl pt-19  flex justify-center items-center">
        THE BAND
      </p>
      <p className="text-base italic text-gray-400 pt-7 pb-4  flex justify-center items-center">
        We love music
      </p>
      <div className="flex justify-center items-center flex-col">
        <p className=" mx-4 text-center max-w-6xl">
          We have created a fictional band website. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>

        <Cards />
      </div>
    </div>
  );
}

export default Main;
