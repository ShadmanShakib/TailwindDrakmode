import React from "react";
import { Divider } from "../icons";
const Card = (props) => {
  return (
    <div className="">
      <img src={props.src} className="mb-8" alt="" />
      <h1 className="text-xl font-extrabold mb-2" style={{ color: "#231075" }}>
        {props.title}
      </h1>
      <p className="text-sm text-gray-600">{props.description}</p>
    </div>
  );
};
function Services() {
  return (
    <div className="px-4 pt-16">
      <h1 style={{ color: "#231075" }} className="text-2xl mb-6 font-bold">
        What we do
      </h1>
      <Divider />
      <Card
        src="images/Business-Apps-1.jpg"
        title="App Development for Businesses"
        description="Our expert app designers and app developers have built beautiful and user-friendly apps that are compatible with iPhone, Android, and iPad apps to help our customer’s businesses grow."
      />
      <Card
        src="images/Start-Up-Apps-1.jpg"
        title="App Development for Start ups"
        description="We work with start-ups to help them turn their vision into reality. We’ll help you through your journey from idea to market-ready. "
      />
      <Card
        src="images/Web-Apps.jpg"
        title="Web App Development"
        description="Our Web Apps are compatible with Web, IOS, and Android. We have worked on hundreds of powerful dashboards and mobile-friendly Web Apps.  "
      />
      <Card
        src="images/UX-apps.jpg"
        title="UX/UI Design"
        description="We are a UX/UI design first mobile application agency that prides our selves on world-class design. Our designs are tested to look beautiful on all mobile devices. We specialize in IOS and Android Apps design. "
      />
    </div>
  );
}

export default Services;
