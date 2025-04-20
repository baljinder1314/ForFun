import React from "react";

function Footer() {
  return (
    <div className="flexustify-center flex-col items-center py-20 w-full space-y-4">
      <div className="flex space-x-1 justify-center items-center">
        <div>
          <a href="#" class="fa fa-facebook"></a>
        </div>
        <div>
          <a href="javascript:void(0)" class="fa fa-twitter"></a>
        </div>
        <div>
          <a href="javascript:void(0)" class="fa fa-google"></a>
        </div>
        <div>
          <a href="javascript:void(0)" class="fa fa-linkedin"></a>
        </div>
        <div>
          <a href="javascript:void(0)" class="fa fa-instagram"></a>
        </div>
        <div>
          <a href="javascript:void(0)" class="fa fa-snapchat-ghost"></a>
        </div>
      </div>
      <div className="text-center">Powered by @ &copy; By Ballu</div>
    </div>
  );
}

export default Footer;
