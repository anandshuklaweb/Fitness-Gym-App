import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Footer = () => (
  <>
    <section id="footer">
      <div className="container-fluid">
        <img src={Logo} alt="logo" className="logo" />
        <h2>Made with ❤️ by Anand Shukla</h2>
      </div>
    </section>
  </>
);

export default Footer;
