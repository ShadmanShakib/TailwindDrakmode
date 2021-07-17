import React from "react";
import { Divider } from "../icons";
import { PrimaryButton } from "../ui";

const Card = (props) => {
  return (
    <div className="p-4 shadow-md">
      <h1 className="text-xl font-extrabold mb-2" style={{ color: "#231075" }}>
        {props.title}
      </h1>
      <img className="h-6 mb-3" src="images/Starss.jpg" alt="" />
      <p className="text-sm text-gray-800">{props.description}</p>
      <h1 className="mt-2">
        <b>{props.name}-</b>
        {props.post}
      </h1>
    </div>
  );
};

function Review() {
  return (
    <div className="px-4 pt-16">
      <div className="flex flex-col items-center">
        <h1 style={{ color: "#231075" }} className="text-2xl mb-6 font-bold">
          Our customers love our work
        </h1>

        <Divider />
      </div>

      <p>
        With over 34 years of industry experience focusing on Web and Mobile
        design and development, we leverage this experience to deliver
        World-Class digital products for our happy customers.
      </p>
      <div className="grid gap-y-4">
        <Card
          title="Professional and Knowlegable"
          description="The team at Spritely have been amazing to work with. They are professional and knowledgeable. They run an amazing process to develop and validate an idea using the expertise of a variety of professionals. "
          name="Bridget Bartolo  "
          post="ACTV Online"
        />
        <Card
          title="A pleasure to work with them"
          description="It was an absolute pleasure working with these guys. Our team is very excited to work on the designs they created. We will definitely be looking to engage them again when the need arises for future projects."
          name="Ibrahim Khan –   "
          post="Literacy Planet"
        />
        <Card
          title="Experts in their field"
          description="The team at Spritely have been amazing to work with. They are professional and knowledgeable. They run an amazing process to develop and validate an idea using the expertise of a variety of professionals. "
          name="Bridget Bartolo  "
          post="ACTV Online"
        />
      </div>
      <div className="flex justify-center mt-8">
        <PrimaryButton title="Contact Us" />
      </div>
    </div>
  );
}

export default Review;
