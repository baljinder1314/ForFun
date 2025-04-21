import React from "react";

function CityCard() {
  return (
    <div className=" w-full h-auto flex justify-center items-center my-7 flex-col sm:flex-row gap-4 px-7">
      <div className=" bg-white border-2 h-auto w-50 ">
        <div>
          <img
            className="h-auto w-full object-cover"
            src="https://www.w3schools.com/w3images/newyork.jpg"
            alt="New York"
          />
        </div>
        <div className="p-4">
          <div className="text-lg font-bold mt-2 text-black ">New York</div>
          <div className="text-sm py-5 text-gray-700 ">Fri 27 Nov 2016</div>
          <div className="text-sm  mt-2 text-black">
            Praesent tincidunt sed tellus ut rutrum sed vitae justo.
          </div>
          <button className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-400">
            Buy Tickets
          </button>
        </div>
      </div>
      <div className=" bg-white border-2 h-auto w-50 ">
        <div>
          <img
            className="h-auto w-full object-cover"
            src="https://www.w3schools.com/w3images/sanfran.jpg"
            alt="New York"
          />
        </div>
        <div className="p-4">
          <div className="text-lg font-bold mt-2 text-black ">Paris</div>
          <div className="text-sm py-5 text-gray-700 ">Sat 28 Nov 2016</div>
          <div className="text-sm  mt-2 text-black">
          Praesent tincidunt sed tellus ut rutrum sed vitae justo.
          </div>
          <button className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-400">
            Buy Tickets
          </button>
        </div>
      </div>
      <div className=" bg-white border-2 h-auto w-50 ">
        <div>
          <img
            className="h-auto w-full object-cover"
            src="https://www.w3schools.com/w3images/paris.jpg"
            alt="New York"
          />
        </div>
        <div className="p-4">
          <div className="text-lg font-bold mt-2 text-black ">San Francisco</div>
          <div className="text-sm py-5 text-gray-700 ">Sun 29 Nov 2016</div>
          <div className="text-sm  mt-2 text-black">
          Praesent tincidunt sed tellus ut rutrum sed vitae justo.
          </div>
          <button className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-400">
            Buy Tickets
          </button>
        </div>
      </div>
    </div>
  );
}

export default CityCard;
