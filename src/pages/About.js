import React from "react";
import DetailBanner from "../components/DetailBanner";

const About = () => {
  return (
    <>
      <DetailBanner />

      <section id="about-fitness">
        <div className="container">
          <h2 className="title">About Fitness App</h2>
          <p className="description">
            We at Fitness App push you to your ultimate body limits to reach
            your ultimate fitness goals with the range of the best resistance
            training Equipments & Cardiovascular Equipments with the proper
            Guidance of certified Fitness Experts.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
