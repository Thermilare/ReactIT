import React from "react";

const Card = ({ image, number, street, state, country }) => {
  return (
    <div className="card">
      <img src={image} />
      <div className="card-body">
        <h5 className="card-title" style={cardStyle}>
          {state}
        </h5>
        <p className="card-text" style={cradSyleBody}>
          {number} <span>{street}</span>
        </p>
        <a href="#" className="btn btn-primary">
          {country}
        </a>
      </div>
    </div>
  );
};

export default Card;
