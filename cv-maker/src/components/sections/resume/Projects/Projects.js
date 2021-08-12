import React from "react";
import PopUpSlider from "../../../customs/PopUpSlider/PopUpSlider";
import "./Projects.css";

function Projects() {
  return (
    <div className="container_projecs">
      {<PopUpSlider sliderTitle="My Projects" />}
    </div>
  );
}

export default Projects;
