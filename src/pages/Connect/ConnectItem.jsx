import React, { useState } from "react";
import "./style.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const ConnectItem = ({ connect }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
  };
  const handlePrev = () => {
    setActiveIndex((prevIndex) => prevIndex - 1);
  };
  return (
    <div className="connectItem_container">
      <div className="connectItem">
        <div style={{ zIndex: 1000 }} className="indicator-bx">
          {/* <div className="ind-con actvv"></div> */}
          {connect?.media?.map((info, index) => (
            <div
              key={index}
              className={`ind-con ${activeIndex === index && "actvv"}`}
            ></div>
          ))}
        </div>
        <img
          className="pic_bg"
          src={connect?.media[activeIndex]?.profile_image || "/images/p1.png"}
        />
        <button
          disabled={activeIndex === 0}
          className="btn_1"
          onClick={handlePrev}
        >
          <div className="arrleft">
            <AiOutlineLeft />
          </div>
        </button>
        <button
          disabled={activeIndex === connect?.media?.length - 1}
          className="btn_2"
          onClick={handleNext}
        >
          <div className="arrright">
            <AiOutlineRight />
          </div>
        </button>
        <div className="connectProfile">
          <img src={connect?.cover_image?.cover_image} />{" "}
          <p>{connect?.full_name}</p>
          <p>@{connect?.username}</p>
          <p>Abeokuta, 56km From you</p>
          <p className="bio">
            {/* Adewalw wed addyjum Adewalw wed addyjum Adewal is a very good guy... */}
            {connect?.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectItem;
