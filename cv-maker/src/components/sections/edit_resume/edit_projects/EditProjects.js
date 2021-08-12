import React, { Component } from "react";
import "./EditProjects.css";

import { Modal } from "react-bootstrap";
import Project from "../../../items/project/Project";
import ProjectForm from "../../../forms/project_form/ProjectForm";
import Scrollbar from "../../../customs/scrollbar/Scrollbar";
import { Button } from "@material-ui/core";
import EditShowList from "../EditShowList/EditShowList";

class EditProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      projects: [
        {
          name: "Chat UP",
          description: "Dating app combines Folowing",
          startTime: "2018",
          endTime: "2020",
          skills: ["JAVA", "Filebase"],
          youtubeLink: "",
          gitLink: "",
          siteLink: "",
        },
        {
          name: "Save Jack",
          description: "Trivia game",
          startTime: "2/2019",
          endTime: "8/2019",
          skills: ["JAVA", "Filebase"],
          youtubeLink: "",
          gitLink: "",
          siteLink: "",
        },
        {
          name: "Whether App",
          description: "Weather app with rest API",
          startTime: "",
          endTime: "1/2020",
          skills: ["JS", "Redux thunk"],
          youtubeLink: "",
          gitLink: "",
          siteLink: "",
        },
      ],
    };
  }

  render() {
    return (
      <EditShowList
        title={"Edit your Projects"}
        list={this.state.projects}
        formType={ProjectForm}
        object={Project}
      />
    );
  }
}

export default EditProjects;
