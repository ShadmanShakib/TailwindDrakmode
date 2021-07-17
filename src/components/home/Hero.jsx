import React from "react";
import { Divider } from "../icons";
import { PrimaryButton } from "../ui";
function Hero() {
  return (
    <>
      <div style={{ backgroundColor: "#061437" }} className="">
        <div
          style={{ backgroundColor: "#061437" }}
          className="px-4 max-w-screen-xl mx-auto pt-20 pb-24  xl:flex flex-row-reverse "
        >
          <img className="xl:h-96" src="Heading-1.jpg" alt="" />
          {/* Left Side */}
          <div className="pt-20 max-w-screen-md">
            <h1 className="text-white text-3xl xl:text-5xl font-extrabold">
              Mobile App Development for Startups &amp; Businesses
            </h1>
            <Divider className="my-5 " />
            <p className="text-gray-300 text-sm xl:mb-10">
              At Spritely we work with businesses and visionaries to build the
              best Web and Mobile apps. Our tried and tested methods provide you
              with the quickest and most cost-effective path to market success
              and business growth.
            </p>
            <PrimaryButton title="Get In Touch" />
          </div>
        </div>
        <div
          style={{ backgroundColor: "#213058" }}
          className=" pt-5 xl:pt-10 xl:pb-6"
        >
          <div className="flex flex-col items-center">
            <h1 className="text-white text-center text-2xl font-extrabold">
              We've Worked with.
            </h1>
            <Divider className="mt-5 mb-3" />
          </div>

          <div className="grid grid-cols-2 xl:grid-cols-6 xl:max-w-screen-xl mx-auto ">
            <img src="images/Lit-planet.jpg" alt="" />
            <img src="images/Suncorp.jpg" alt="Suncorp logo" />
            <img src="images/trulet.jpg" alt="Trulet logo" />
            <img src="images/raywhite.jpg" alt="Raywhite logo" />
            <img src="images/Socail.jpg" alt="" />
            <img src="images/Redcross.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
