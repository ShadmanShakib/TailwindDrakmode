import React from "react";
import { Call, Mail, Menu, Light, Dark } from "../icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../store/Layout/actions";
import Portal from "@reach/portal";
import PhoneMenu from "./PhoneMenu";
import useDarkMode from "../../libs/hooks/useDarkMode";
import { Link } from "react-router-dom";

function Header() {
  const menuState = useSelector((state) => state.layout.menu);
  const dispatch = useDispatch();
  const [mode, setCurrentMode] = useDarkMode();
  return (
    <div className="h-16 fixed w-full z-10  bg-primarybg dark:bg-gray-800   px-4">
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
            <a href="/" className="ml-4 hover:text-green-300">
              Home
            </a>
            <a className="ml-4 hover:text-green-300" href="#ourwork">
              Our Work
            </a>
            <a className="ml-4 hover:text-green-300" href="#about">
              About
            </a>
            <a className="ml-4 hover:text-green-300" href="#prototyping">
              Prototyping
            </a>
            <a className="ml-4 hover:text-green-300" href="#startup">
              Startup Packs
            </a>
            <a className="ml-4 hover:text-green-300" href="#career">
              Careers
            </a>
          </div>
          <div className="flex xl:hidden items-center ">
            <div
              onClick={() => setCurrentMode(mode)}
              className="pr-2 cursor-pointer"
            >
              {mode === "dark" ? (
                <Dark className="h-4 w-4 fill-current  text-white" />
              ) : (
                <Light className="h-5 w-4 fill-current  text-white" />
              )}
            </div>
            <Call className="h-6 w-6 pr-2  xl:hidden text-green-400 fill-current" />
            <Mail className="h-4 w-4 xl:hidden fill-current text-white" />
          </div>
        </div>

        <div className="xl:flex hidden items-center ">
          <div
            onClick={() => setCurrentMode(mode)}
            className="mr-5 cursor-pointer"
          >
            {/*  */}
            {mode === "dark" ? (
              <Dark className="h-6 w-6 fill-current  text-white" />
            ) : (
              <Light className="h-6 w-6 fill-current  text-white" />
            )}
          </div>
          <div className="hidden xl:block ">
            <Link to="/get-in-touch">
              <button className="text-green-300 animate-pulse transition duration-100 hover:text-white hover:border-white dark:text-white border-2 py-2 px-4 border-green-300 rounded-md">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
