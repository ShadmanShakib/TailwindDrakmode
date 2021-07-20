import React from "react";
import { Divider, Liinkedin, Github } from "../icons";
import "../../styles/Team.css";

const Card = (props) => {
  return (
    <div className="  relative card  group dark:bg-white    rounded  shadow-md py-4 flex flex-col items-center hover:shadow-2xl">
      <div className="card-desc rounded"></div>
      <img
        className="h-28 w-28 mb-2 relative shadow-md  rounded-full"
        src="ElonMusk.jpg"
        alt="Elon Musk"
      />
      <div className="mb-3 flex relative h-6   ">
        <Github className="h-6 w-6 rounded-full fill-current " />
        <Liinkedin className="h-6 w-6 ml-3  fill-current" />
      </div>
      <div className="relative">
        <h1 className="font-bold text-lg text-primary  group-hover:text-white ">
          Elon Musk
        </h1>
        <p className="text-sm text-gray-700 group-hover:text-gray-300 mb-4">
          Starbase,Taxas
        </p>
      </div>
    </div>
  );
};

function Team() {
  return (
    <div className="px-4 xl:max-w-screen-xl mx-auto ">
      <h1 className="text-2xl text-primary dark:text-white xl:text-4xl py-6 font-bold">
        Our Team
      </h1>
      <Divider />
      <div className="grid mt-10 gap-y-4 xl:grid-cols-4 xl:gap-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Team;
