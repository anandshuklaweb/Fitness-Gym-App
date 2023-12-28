import React from "react";
import Banner from "../assets/images/slider/Banner.jpg";

const DetailBanner = () => {
  return (
    <>
      <div className="h-96">
        <div className="">
          <img src={Banner} className=" w-100 h-96 object-cover" alt="..." />
        </div>
      </div>
    </>
  );
};

export default DetailBanner;
