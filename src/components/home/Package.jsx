import React from "react";
import { Divider } from "../icons";
import { PrimaryButton } from "../ui";

const PackageCard = (props) => {
  return (
    <div className="p-4 h-96 rounded shadow-md xl:w-72 dark:bg-white">
      <img src={props.src} alt="" />
      <h1 className="text-center  mt-4 xl:text-2xl font-bold text-xl mb-3 text-primary">
        {props.name}
      </h1>
      {props.features &&
        props.features.map((feature, inx) => {
          return (
            <h1 className="text-center  text-gray-700 text-sm" key={inx}>
              {feature}
            </h1>
          );
        })}
      <div className="flex mt-3 justify-center">
        <PrimaryButton title="Get Started" />
      </div>
    </div>
  );
};

function Package() {
  return (
    <div className="px-4 pt-16 max-w-screen-xl mx-auto">
      <h1 className="text-2xl mb-6 text-primary dark:text-white xl:text-4xl font-bold">
        Spritely Start-Up Packs
      </h1>
      <Divider className="mb-10" />
      <h1 className="text-xl text-primary dark:text-white  font-bold">
        Our Start Up Packs
      </h1>
      <div
        className="xl:flex flex-row-reverse justify-between items-center mt-10
      "
      >
        <div className="xl:w-72 ">
          <p className="mb-5 dark:text-gray-300">
            Let’s take your vision and turn it into reality. In just a few weeks
            we’ll take your Web or Mobile App idea and bring it to life by
            creating an app design prototype, brand kit, marketing website,
            pitch deck, and marketing video. You can customize exactly what you
            want so you can start your fundraising journey.
          </p>
          <PrimaryButton title="Learn More" />
        </div>

        <PackageCard
          name="Classic Pack"
          src="images/Spritely-Startup-Pack-Classic-Pack.jpg"
          features={[
            "App Design Prototype",
            "Brand Kit",
            "Pitch Deck",
            "Marketing Website",
          ]}
        />
        <PackageCard
          name="Standard Pack"
          src="images/Spritely-Startup-Pack-Standard-Pack.jpg"
          features={["App Design Prototype", "Brand Kit", "Pitch Deck"]}
        />
      </div>
    </div>
  );
}

export default Package;
