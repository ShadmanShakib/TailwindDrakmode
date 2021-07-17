import React from "react";
import { Divider } from "../icons";

function Ourwork() {
  return (
    <div className="px-4 pt-16">
      <h1 style={{ color: "#231075" }} className="text-2xl mb-6 font-bold">
        Our Work
      </h1>
      <Divider className="mb-8" />
      <img className="mb-6" src="images/ourwork-suncorp.jpg" alt="" />
      <img className="mb-6" src="images/Literacy-planet.jpg" alt="" />
      <img className="mb-6" src="images/ourwork-bndr.jpg" alt="" />
      <img className="mb-6" src="images/ourwork-kwickie.jpg" alt="" />
      <img className="mb-6" src="images/ourwork-sociall.jpg" alt="" />
      <img src="images/ourwork-trulet.jpg" alt="" />
    </div>
  );
}

export default Ourwork;
