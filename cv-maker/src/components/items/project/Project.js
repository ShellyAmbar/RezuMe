import React from "react";
import { Button } from "react-bootstrap";
export default function Project(props) {
  return (
    <div class="card" style={{ width: "14rem", margin: "5px" }}>
      <img class="card-img-top" src="images/project.png" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">
          {props.item.title}, {props.item.startTime} - {props.item.endTime}
        </h5>
        <p class="card-text">{props.item.description}</p>
        <Button onClick={props.onClickExpand}>Show more</Button>
      </div>
    </div>
  );
}
