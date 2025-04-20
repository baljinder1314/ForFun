import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { Store } from "../../store/store";
function Navbar() {
  const { handleNavbar, nav } = useContext(Store);
return (
    <nav className={`bg-black text-white flex ${nav ? "h-55" : "h-12"} sticky top-0`}>
        <div className="w-full flex ">
            <ul className="w-full p-4 space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
                <li >
                    <a href="/" >HOME</a>
                </li>
                <li className={`${nav ? "block" : "hidden"} sm:block`}>
                    <a href="/">BAND</a>
                </li>
                <li className={`${nav ? "block" : "hidden"} sm:block`}>
                    <a href="/">TOUR</a>
                </li>
                <li className={`${nav ? "block" : "hidden"} sm:block`}>
                    <a href="/">CONTECT</a>
                </li>
                <li className={`${nav ? "block" : "hidden"} sm:block`}>
                    <a href="/">MORE</a>
                </li>
            </ul>
            <div className="flex items-center mr-3">
                <div className="hidden sm:block">
                    <FaSearch />
                </div>
                <div onClick={handleNavbar} className={`${nav?"relative bottom-21":""} space-y-1 block sm:hidden`}>
                    <div className="h-0.5 w-3  bg-white"></div>
                    <div className="h-0.5 w-3  bg-white"></div>
                    <div className="h-0.5 w-3  bg-white"></div>
                </div>
            </div>
        </div>
    </nav>
);
}

export default Navbar;
