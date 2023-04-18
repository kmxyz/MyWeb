import React, { Component } from "react";
import pic from "../pic/pic.png";

const Card = (props) => {
  const { name, description } = props.items;
  return (
    <div className="card h-100 w-100 rounded-5">
      <img
        src={pic}
        className="card-img-top rounded-top-5"
        height="150"
        alt=".."
      ></img>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        {description.map((m) => (
          <p className=" text-start ps-2">{m}</p>
        ))}
      </div>
    </div>
  );
};

export default Card;
