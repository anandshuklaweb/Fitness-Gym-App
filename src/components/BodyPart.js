import React from "react";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <>
    <div
      className="card bodyPart-card"
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <div className="card-body">
        <img src={Icon} alt="dumbbell" className="bodypart-img card-img-top" />
        <h2 className="card-text bodypart-text">{item}</h2>
      </div>
    </div>
    {/* 
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === item
          ? {
              borderBottom: "4px solid #00c2cb",
              borderLeft: "4px solid #00c2cb",
              background: "#f5f5f5",
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
              width: "312px",
              height: "300px",
              cursor: "pointer",
              gap: "47px",

              borderRight: "1px solid rgba(0,0,0,.125)",
              borderTop: "1px solid rgba(0,0,0,.125)",
            }
          : {
              background: "#f7f7f7",
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
              width: "312px",
              height: "300px",
              cursor: "pointer",
              gap: "47px",
              borderTop: "1px solid rgba(0,0,0,.125)",
              borderLeft: "1px solid rgba(0,0,0,.125)",
              borderRight: "1px solid rgba(0,0,0,.125)",
              borderBottom: "1px solid rgba(0,0,0,.125)",
            }
      }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "80px", height: "80px" }}
      />
      <Typography
        fontSize="28px"
        fontWeight="bold"
        color="#00C2CB"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack> */}
  </>
);

export default BodyPart;
