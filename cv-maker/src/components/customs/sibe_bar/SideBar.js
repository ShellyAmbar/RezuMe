import React from "react";
import "./SideBar.css";
import { MenuData } from "./MenuData";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar_container">
      <ul className="list">
        {MenuData.map((val, key) => {
          return (
            <li
              id={window.location.pathname.includes(val.link) ? "active" : ""}
              key={key}
              // onClick={() => {
              //   window.location.pathname = val.link;
              // }}
            >
              <Link to={val.link} className="row">
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
