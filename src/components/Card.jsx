import React from "react";
import ReactDOM from "react-dom/client"
import Pin from "../images/location.png"

function Card(props) {
  return (
    <section className="card">
      <div className="card--image">
        <img src={props.item.image} />
      </div>
      <div className="card--info">
        <div className="card--info---top">
          <img src={Pin} className="pin" />
          <p className="location">{props.item.location}</p>
          <a href={props.item.googleMapsUrl} className="maps">View on Google Maps</a>
        </div>
          <h1 className="title">{props.item.title}</h1>
        <div className="card--info---bottom">
          <span className="date">{props.item.startDate}</span>
          <span className="date">{props.item.endDate}</span>
          <p className="description">{props.item.description}</p>
        </div>
      </div>
    </section>
  )
}

export default Card