import React from "react";
import { Call, Mail, Menu } from "../icons";

function Header() {
  return (
    <div
      className="h-12 justify-between flex items-center px-4"
      style={{ backgroundColor: "#061437" }}
    >
      <Menu className="h-6 w-6 fill-current text-white" />
      <img className="h-7" src="logo.png" alt="" />
      <div className="flex items-center ">
        <Call className="h-6 w-6 pr-2  text-green-400 fill-current" />
        <Mail className="h-4 w-4 fill-current text-white" />
      </div>
    </div>
  );
}

export default Header;
