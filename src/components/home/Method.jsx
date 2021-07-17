import React from "react";
import { Divider } from "../icons";
import { PrimaryButton } from "../ui";

const Card = (props) => {
  return (
    <div className="">
      <img className="mb-5" src={props.src} alt="" />
      <h1 className="text-primary font-bold text-xl mb-3">{props.title}</h1>
      <p className="text-sm text-gray-700">{props.description}</p>
    </div>
  );
};

function Method() {
  return (
    <>
      <div className="px-4 pt-16">
        <img src="Mocks-white.jpg" alt="" />
        <h1 className="text-primary font-extrabold text-2xl mb-4">
          We create fully interactive Web and Mobile App Design Prototypes
        </h1>
        <p className="text-sm text-gray-700 mb-4">
          We create stunning, fully Interactive Web and Mobile App Design
          Prototypes. These prototypes look and feel exactly like an app should,
          and are a great way to get user feedback and have people excited about
          your vision.
        </p>
        <PrimaryButton title="Learn More" />
        <h1 className="text-2xl text-primary mb-6 mt-8 font-bold">
          Our Method
        </h1>
        <Divider />
        <div className="grid mt-8 gap-y-4 pb-10">
          <Card
            src="images/our-method-discovery.jpg"
            title="Discovery"
            description="Untill tested all we have are assumptions. Validating our idea with real customers maximizes your changes of success. This is a crusical step that lays foundation for your products building blocks"
          />
          <Card
            src="images/our-method-design.png"
            title="App Design"
            description="Untill tested all we have are assumptions. Validating our idea with real customers maximizes your changes of success. This is a crusical step that lays foundation for your products building blocks"
          />
          <Card
            src="images/our-method-development.jpg"
            title="App Development"
            description="Untill tested all we have are assumptions. Validating our idea with real customers maximizes your changes of success. This is a crusical step that lays foundation for your products building blocks"
          />
          <Card
            src="images/our-method-delivery.jpg"
            title="Delivery"
            description="Untill tested all we have are assumptions. Validating our idea with real customers maximizes your changes of success. This is a crusical step that lays foundation for your products building blocks"
          />
        </div>
      </div>
      <div className="text-center bg-gray-100 py-3">
        <h1 className="text-primary font-bold mb-3 text-2xl text-center">
          Let's build your vision
        </h1>
        <p className="text-gray-700 px-4 text-sm mb-5">
          Get in touch with us today and bring your vision to reality. We have
          worked with customers Australian-wide. Providing mobile app design and
          development for customers in Goldcoast, Brisbane, Melbourne, and
          Sydney.
        </p>
        <PrimaryButton title="Get in touch" />
      </div>
    </>
  );
}

export default Method;
