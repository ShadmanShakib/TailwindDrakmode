import React from "react";
import { Divider } from "../icons";

const Card = (props) => {
  return (
    <div className="bg-gray-100 p-6 shadow-md">
      <img
        className="h-20 w-20 mb-5 shadow-md rounded-full"
        src="ElonMusk.jpg"
        alt="Elon Musk"
      />
      <h1 className="font-bold ">Elon Musk</h1>
      <p className="text-sm text-gray-700 mb-4">Starbase,Taxas</p>
      <a className="  text-primary" href="tel:+9494884848">
        +3838838383
      </a>
      <br />
      <a className="text-primary" href="mailto:elonmusk@gmail.com">
        ElonMuskA@gmail.com
      </a>
    </div>
  );
};

function Team() {
  return (
    <div className="px-4 ">
      <h1 className="text-2xl text-primary mb-6 mt-8 font-bold">Our Team</h1>
      <Divider />
      <div className="grid mt-10 gap-y-4">
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
