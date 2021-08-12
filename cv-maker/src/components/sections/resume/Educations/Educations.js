import React from "react";
import PopUpSlider from "../../../customs/PopUpSlider/PopUpSlider";
import "./Educations.css";

function Educations() {
  return (
    <div className="container_educations">
      {<PopUpSlider sliderTitle="My Educations" />}
    </div>
  );
}

export default Educations;
