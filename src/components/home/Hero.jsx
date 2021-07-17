import React from "react";
import { Divider } from "../icons";
import { PrimaryButton } from "../ui";
function Hero() {
  return (
    <div style={{ backgroundColor: "#061437" }} className="px-4 ">
      <img src="Heading-1.jpg" alt="" />

      <h1 className="text-white text-3xl font-extrabold">
        Mobile App Development for Startups &amp; Businesses
      </h1>
      <Divider className="my-5" />
      <p className="text-gray-300 text-sm">
        At Spritely we work with businesses and visionaries to build the best
        Web and Mobile apps. Our tried and tested methods provide you with the
        quickest and most cost-effective path to market success and business
        growth.
      </p>
      <PrimaryButton title="Get In Touch" />
      <h1 className="text-white text-3xl font-extrabold">We've Worked with.</h1>
      <div className="grid grid-cols-2">
        <img src="images/Lit-planet.jpg" alt="" />
      </div>
    </div>
  );
}

export default Hero;
