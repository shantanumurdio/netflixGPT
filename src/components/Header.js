import React from "react";
import { Netflix_Logo } from "../utils/Constant";

const Header = () => {
  return (
    <div className="absolute px-8 py-4 bg-gradient-to-b from-black w-48 z-10 ">
      <img className="" src={Netflix_Logo} alt="Netflix Logo" />
    </div>
  );
};

export default Header;
