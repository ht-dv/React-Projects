import React from "react";

const ContactItems = (props) => {
  return (
    <div className="info-box">
      <div className="item-icon">
        <img src={props.image} alt="/" />
      </div>
      <div className="info-text">
        <h5 className=" mb-0">{props.way}</h5>
        <small>{props.info}</small>
      </div>
    </div>
  );
};

export default ContactItems;
