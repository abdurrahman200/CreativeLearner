import React from "react";
import Courses from "../Course/Courses";
import CounterSection from "./CounterSection";
import HeroSection from "./HeroSection";
import Pricing from "./Pricing";
import Resources from "./Resources";

const index = () => {
  return (
    <div>
      <HeroSection />
      <Courses />
      <CounterSection />
      <Resources />
      <Pricing />
    </div>
  );
};

export default index;
