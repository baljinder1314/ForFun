import { useState } from "react";
import { Store } from "./Store";
export const ContextProvider = ({ children }) => {
  const [nav, setNav] = useState(false);
  const [bgColor, setBgColor] = useState(false);
  const handleNavbar = () => {
    setNav((value) => !value);
  };

  const handleBgImage = () => {
    // setBgColor((value) => !value);
  };
  return (
    <Store.Provider value={{ handleNavbar, nav, handleBgImage, bgColor }}>
      {children}
    </Store.Provider>
  );
};
