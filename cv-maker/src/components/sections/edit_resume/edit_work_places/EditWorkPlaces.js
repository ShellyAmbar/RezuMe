import React, { Component } from "react";

import "./EditWorkPlaces.css";
import Workplace from "../../../items/workPlace/Workplace";

import WorkPlaceForm from "../../../forms/workplace_form/WorkPlaceForm";
import EditShowList from "../EditShowList/EditShowList";

class EditWorkPlaces extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workPlaces: [
        {
          name: "Beatman",
          description: "Project Company",
          role: "Developer",
          startTime: "2016",
          endTime: "2012",
          achivments: "",
          siteLink: "",
          skills: "",
        },
        {
          name: "Medix",
          description: "Project Company",
          role: "Developer",
          startTime: "2016",
          endTime: "2012",
          achivments: "",
          siteLink: "",
          skills: "",
        },
        {
          name: "Nuvei",
          description: "Project Company",
          role: "Developer",
          startTime: "2016",
          endTime: "2012",
          achivments: "",
          siteLink: "",
          skills: "",
        },
      ],
    };
  }

  render() {
    return (
      <EditShowList
        title={"Edit your Work Places"}
        list={this.state.workPlaces}
        formType={WorkPlaceForm}
        object={Workplace}
      />
    );
  }
}

export default EditWorkPlaces;
