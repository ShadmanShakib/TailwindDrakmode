import React from "react";
import { Divider } from "../icons";

function Ourwork() {
  return (
    <div className="px-4 pt-16 max-w-screen-xl mx-auto">
      <h1 className="text-2xl xl:text-4xl dark:text-white mb-6 font-bold">
        Our Work
      </h1>
      <Divider className="mb-8" />
      <div className="grid xl:grid-cols-3 gap-10">
        <div className="">
          <img className="mb-6" src="images/ourwork-suncorp.jpg" alt="" />
          <img className="mb-6" src="images/Literacy-planet.jpg" alt="" />
        </div>
        <div className="">
          <img className="mb-6" src="images/ourwork-bndr.jpg" alt="" />
          <img className="mb-6" src="images/ourwork-kwickie.jpg" alt="" />
        </div>
        <div className="">
          <img className="mb-6" src="images/ourwork-sociall.jpg" alt="" />
          <img src="images/ourwork-trulet.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Ourwork;
