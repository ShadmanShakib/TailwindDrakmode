import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../store/Layout/actions";
function PhoneMenu() {
  const dispatch = useDispatch();
  return (
    <div
      style={{ backgroundColor: "#061437" }}
      className="fixed top-0 xl:hidden z-10 bottom-0 flex pt-20 flex-col text-center   text-white  w-full"
    >
      <a href="/" className="">
        Home
      </a>
      <a className="my-3" href="#ourwork">
        Our Work
      </a>
      <a className="" href="#about">
        About
      </a>
      <a className="my-3" href="#prototyping">
        Prototyping
      </a>
      <a className="" href="#startup">
        Startup Packs
      </a>
      <a className="my-3" href="#career">
        Careers
      </a>
      <h1 className="text-green-300" onClick={() => dispatch(toggleMenu)}>
        Close
      </h1>
    </div>
  );
}

export default PhoneMenu;
