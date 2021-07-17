import React from "react";
import { Call, Mail, Menu } from "../icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../store/Layout/actions";
import Portal from "@reach/portal";
import PhoneMenu from "./PhoneMenu";

function Header() {
  const menuState = useSelector((state) => state.layout.menu);
  const dispatch = useDispatch();

  return (
    <div
      className="h-16 fixed w-full z-10    px-4"
      style={{ backgroundColor: "#061437" }}
    >
      <div className="xl:flex xl:justify-between items-center max-w-screen-xl mx-auto ">
        <div className="h-16  items-center xl:justify-start  justify-between flex">
          <Menu
            onClick={() => dispatch(toggleMenu)}
            className="h-6 w-6 xl:hidden fill-current text-white"
          />

          {menuState && (
            <Portal>
              <PhoneMenu />
            </Portal>
          )}
          <img className="h-7" src="logo.png" alt="" />
          <div className="text-white hidden xl:block">
            <a href="/" className="ml-4">
              Home
            </a>
            <a className="ml-4" href="#ourwork">
              Our Work
            </a>
            <a className="ml-4" href="#about">
              About
            </a>
            <a className="ml-4" href="#prototyping">
              Prototyping
            </a>
            <a className="ml-4" href="#startup">
              Startup Packs
            </a>
            <a className="ml-4" href="#career">
              Careers
            </a>
          </div>
          <div className="flex items-center ">
            <Call className="h-6 w-6 pr-2  xl:hidden text-green-400 fill-current" />
            <Mail className="h-4 w-4 xl:hidden fill-current text-white" />
          </div>
        </div>
        <div className="hidden xl:block">
          <button className="text-green-300  border-2 py-2 px-4 border-green-300 rounded-md">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
