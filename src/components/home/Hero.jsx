import React from "react";
import { Divider } from "../icons";
import { PrimaryButton } from "../ui";
function Hero() {
  return (
    <>
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
      </div>
      <div style={{ backgroundColor: "#213058" }} className=" pt-5">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-center text-2xl font-extrabold">
            We've Worked with.
          </h1>
          <Divider className="mt-5 mb-3" />
        </div>

        <div className="grid grid-cols-2">
          <img src="images/Lit-planet.jpg" alt="" />
          <img src="images/Suncorp.jpg" alt="Suncorp logo" />
          <img src="images/trulet.jpg" alt="Trulet logo" />
          <img src="images/raywhite.jpg" alt="Raywhite logo" />
          <img src="images/Socail.jpg" alt="" />
          <img src="images/Redcross.jpg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero;
