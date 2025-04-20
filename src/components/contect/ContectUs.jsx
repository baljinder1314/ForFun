import React from "react";

function ContectUs() {
  return (
<div className="h-[25rem] w-full flex justify-center items-center flex-col mt-20">
  <div className="my-10 flex justify-center items-center flex-col space-y-4">
    <p className="font-semibold text-4xl">CONTACT</p>
    <p className="text-base text-gray-600 italic">Fan? Drop a note!</p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4 pb-20 container items-center justify-center">
    <div className="flex flex-col items-center justify-center space-y-2">
      <div>
        <p>Chicago, US</p>
        <p>Phone: +00 151515</p>
        <p>Email: mail@mail.com</p>
      </div>
    </div>
    <div className="flex flex-col items-center space-y-2 w-full"> 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full max-w-96"> 
        <input type="text" className="border-1 p-2 w-full" placeholder="Name" /> 
        <input type="text" className="border-1 p-2 w-full" placeholder="Email" />
      </div>
      <input type="text" className="border-1 p-2 w-full max-w-96" placeholder="Message" /> 
      <div className="flex flex-row-reverse w-full max-w-96">  
        <button className="py-1 px-2 bg-black text-white">SEND</button>
      </div>
    </div>
  </div>
</div>
  );
}

export default ContectUs;
