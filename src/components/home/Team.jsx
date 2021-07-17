import React from "react";
import { Divider, Liinkedin, Github } from "../icons";

const Card = (props) => {
  return (
    <div className="bg-white p-6 shadow-md hover:shadow-lg">
      <img
        className="h-20 w-20 mb-2 shadow-md rounded-full"
        src="ElonMusk.jpg"
        alt="Elon Musk"
      />
      <div className="mb-3 flex">
        <Github className="h-6 w-6 rounded-full" />
        <Liinkedin className="h-6 w-6  ml-3" />
      </div>
      <h1 className="font-bold text-primary ">Elon Musk</h1>
      <p className="text-sm text-gray-700 mb-4">Starbase,Taxas</p>
      <a className="  text-green-300" href="tel:+9494884848">
        +3838838383
      </a>
      <br />
      <a className="text-green-300" href="mailto:elonmusk@gmail.com">
        ElonMuskA@gmail.com
      </a>
    </div>
  );
};

function Team() {
  return (
    <div className="px-4 xl:max-w-screen-xl mx-auto ">
      <h1 className="text-2xl text-primary mb-6 mt-8 font-bold">Our Team</h1>
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
