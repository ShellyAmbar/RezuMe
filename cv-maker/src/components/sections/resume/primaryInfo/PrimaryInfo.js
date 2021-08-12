import React from "react";
import "./PrimaryInfo.css";

function PrimaryInfo(props) {
  return (
    <div className="container">
      <img className="img-profile" src="images/9.jpg" />
      <h1 className="h1">{props.fullName}</h1>
      {/* <div className="contact-social">
        <a class="social-icon-link" href={props.linkGit}>
          <i class="fab fa-github-square" aria-hidden="true" />
        </a>
        <a class="social-icon-link" href={props.linkYoutube}>
          <i class="fab fa-youtube-square" aria-hidden="true" />
        </a>
        <a class="social-icon-link" href={props.linkLinkdin}>
          <i class="fab fa-linkedin-square" aria-hidden="true" />
        </a>
      </div>

      <p className="p">{props.about}</p> */}
    </div>
  );
}

export default PrimaryInfo;
