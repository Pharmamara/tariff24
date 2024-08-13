import React from 'react';
import "./card.css";

const Tariff = (props) => {
    return (
        <div className="card" style={props.style}>
      <div className="rc-name">{props.name}</div>
      <div className="rc-price">{props.price}</div>
      <div className="rc-speed">{props.speed}</div>
      <div className="rc-description">{props.description}</div>
    </div>
    );
};

export default Tariff;