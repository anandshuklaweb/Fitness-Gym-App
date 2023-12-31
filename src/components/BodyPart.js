import React from "react";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart }) => (
  <>
    <div 
      className="max-w-[310px] w-[290px] mx-2 border-2 border-l-4 border-b-4 hover:bg-gray-100 border-teal-400 rounded-sm cursor-pointer"
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <div className="flex justify-center flex-col items-center py-16 gap-5">
        <img src={Icon} alt="dumbbell" className="w-16 md:w-24 " />
        <h2 className="text-3xl text-teal-400 uppercase font-semibold">{item}</h2>
      </div>
    </div>
  </>
);

export default BodyPart;
