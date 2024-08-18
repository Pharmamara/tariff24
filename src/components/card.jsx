import React from 'react';
import "./card.css";

const Tariff = (props) => {
  if(props.selected) {
    return (
      <div className="card cardActive" style={props.style}>
        <div className="rc-name">выбран тариф ${props.name}</div>
        <div className="rc-price">за ${props.price}</div>
        <div className="rc-speed">скорость ${props.speed}</div>
        <div className="rc-description">{props.description}</div>
      </div>
    );
  }

  return (
    <div className={`card ${props.className}`} style={props.style}>
      <div className="rc-name">{props.name}</div>
      <div className="rc-price">{props.price}</div>
      <div className="rc-speed">{props.speed}</div>
      <div className="rc-description">{props.description}</div>
    </div>
  );
};

export default Tariff;