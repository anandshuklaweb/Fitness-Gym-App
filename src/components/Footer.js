import React from "react";
import Logo from "../assets/images/Logo.png";

const Footer = () => (
  <>
    <section className="py-12 bg-teal-400 text-center">
      <div className="flex flex-col justify-center items-center">
        <img src={Logo} alt="logo" className="w-16 pb-2" />
        <p className="text-gray-700">Made with ❤️ by Anand Shukla</p>
      </div>
    </section>
  </>
);

export default Footer;
