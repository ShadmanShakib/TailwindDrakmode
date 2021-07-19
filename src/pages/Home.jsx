import React from "react";
import { Footer, Header } from "../components/common";
import {
  Hero,
  Method,
  Ourwork,
  Package,
  Review,
  Services,
  Team,
} from "../components/home";

function Home() {
  return (
    <div className="dark:bg-gray-900">
      <Header />
      <Hero />
      <Services />
      <Team />
      <Ourwork />
      <Review />
      <Package />
      <Method />
      <Footer />
    </div>
  );
}

export default Home;
