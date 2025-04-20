import React, { useContext } from "react";
import CityCard from "./CityCard";
import { Store } from "../../store/store";

function Content() {
  const {bgColor} = useContext(Store);
  return (
    <div className={`bg-black sm:h-[53rem] h-[110rem] text-white`}>
      <div className="flex justify-center items-center flex-col">
        <p className="text-5xl text-center pt-20">TOUR DATES</p>
        <p className="py-7 italic text-gray-400">Remember to book your tickets!</p>
      </div>
      <div className=" border-white mx-10 ">
        <p className="bg-white border-1 border-gray-400 py-2 pl-3 text-gray-600">September </p>
        <p className="bg-white border-1 border-gray-400 py-2 pl-3 text-gray-600">October </p>
        <p className="bg-white border-1 border-gray-400 py-2 pl-3 text-gray-600">Navember</p>
      </div>
      <CityCard />
    </div>
  );
}

export default Content;
