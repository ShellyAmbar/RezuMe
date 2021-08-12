import React from "react";
import SideBar from "../sibe_bar/SideBar";

export default function Layout(props) {
  return (
    <div>
      <SideBar history={props.history} />
      <div className="layout-container">{props.children}</div>
    </div>
  );
}
