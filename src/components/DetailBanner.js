import React from "react";
import Banner from "../assets/images/slider/Banner.jpg";

const DetailBanner = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide detail-banner"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Banner} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailBanner;
