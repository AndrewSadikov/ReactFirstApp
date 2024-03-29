import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card--img" alt={props.country} />
      <div className="card--stats">
        <img
          src={require("../images/star.png")}
          className="card--star"
          alt="Star"
        />
        <p>
          {props.rating}{" "}
          <span className="grey">
            ({props.reviewCount}) • {props.country}
          </span>
        </p>
      </div>
      <div className="card--title">
        <p>{props.title}</p>
        <p>
          From<span className="bold"> ${props.cost}</span> / month
        </p>
      </div>
    </div>
  );
}
