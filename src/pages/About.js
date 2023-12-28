import React from "react";
import DetailBanner from "../components/DetailBanner";

const About = () => {
  return (
    <>
      <DetailBanner />

      <div className="px-8 py-16 text-center">
        <h2 className="text-4xl font-semibold pb-4 md:pb-8 md:text-6xl ">About Fitness App</h2>
        <p className="text-xl md:text-2xl font-medium">
          We at Fitness App push you to your ultimate body limits to reach
          your ultimate fitness goals with the range of the best resistance
          training Equipments & Cardiovascular Equipments with the proper
          Guidance of certified Fitness Experts.
        </p>
      </div>
    </>
  );
};

export default About;
