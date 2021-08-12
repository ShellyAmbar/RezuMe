import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./EditEducations.css";
import Education from "../../../items/education/Education";
import { Modal } from "react-bootstrap";
import EducationForm from "../../../forms/education_form/EducationForm";
import EditShowList from "../EditShowList/EditShowList";

class EditEducations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educations: [
        {
          field: "Computer Science",
          institusionName: "HIT",
          description: "BSC ",
          startTime: "2016",
          endTime: "2012",
          courses: ["Java", "JS"],
        },
        {
          field: "Psichology",
          institusionName: "Ben Gurion",
          description: "",
          startTime: "2016",
          endTime: "2019",
          courses: ["", ""],
        },
        {
          field: "Psichology",
          institusionName: "Ben Gurion",
          description: "",
          startTime: "2020",
          endTime: "2022",
          courses: ["", ""],
        },
      ],
    };
  }

  render() {
    return (
      <EditShowList
        title={"Edit your Educations"}
        list={this.state.educations}
        formType={EducationForm}
        object={Education}
      />
    );
  }
}

export default EditEducations;
