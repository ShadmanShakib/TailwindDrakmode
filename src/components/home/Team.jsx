import React from "react";
import { Divider, Liinkedin, Github } from "../icons";

const Card = (props) => {
  return (
    <div className="bg-white rounded-sm hover:bg-gray-200 shadow-md py-4 flex flex-col items-center hover:shadow-2xl">
      <img
        className="h-28 w-28 mb-2 shadow-md rounded-full"
        src="ElonMusk.jpg"
        alt="Elon Musk"
      />
      <div className="mb-3  hidden hover:flex">
        <Github className="h-6 w-6 rounded-full" />
        <Liinkedin className="h-6 w-6  ml-3" />
      </div>
      <h1 className="font-bold text-lg text-primary ">Elon Musk</h1>
      <p className="text-sm text-gray-700 mb-4">Starbase,Taxas</p>
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
