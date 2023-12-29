import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import DetailBanner from "./DetailBanner";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <>
      <DetailBanner />

      <section id="exercise-detail">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 text-right">
              <img
                src={gifUrl}
                alt={name}
                loading="lazy"
                className="detail-image"
              />
            </div>
            <div className="col-md-6 exercise-details-name">
              <h2>{name}</h2>

              <p>
                Exercises keep you strong. <span>{name}</span> bup is one of the
                best <br /> exercises to target your {target}. It will help you
                improve your <br /> mood and gain energy.
              </p>

              {extraDetail?.map((item, index) => (
                <div className="media" key={index}>
                  <div className="img">
                    <img src={item.icon} alt={bodyPart} className="mr-3" />
                  </div>
                  <div className="media-body">
                    <h5 className="mt-0">{item.name}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
