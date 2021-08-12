import React from "react";
import { Button } from "react-bootstrap";

export default function Education(props) {
  return (
    <div class="card" style={{ width: "14rem", margin: "10px" }}>
      <img
        style={{ padding: "10px" }}
        class="card-img-top"
        src="images/education.png"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">
          {props.item.institusionName}, {props.item.field}
        </h5>
        <p class="card-text">
          {props.item.startTime} - {props.item.endTime}
        </p>
        <p class="card-text">{props.item.courses}</p>
        <Button onClick={props.onClickExpand}>Show more</Button>
      </div>
    </div>
  );
}
