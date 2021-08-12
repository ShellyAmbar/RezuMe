import React from "react";
import PopUpSlider from "../../../customs/PopUpSlider/PopUpSlider";
import "./Recommendations.css";

function Recommendations() {
  return (
    <div className="container_recommendations">
      {<PopUpSlider sliderTitle="My Recommendations" />}
    </div>
  );
}

export default Recommendations;
