import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./EditCertificates.css";
import EditShowList from "../EditShowList/EditShowList";
import Certificate from "../../../items/certificate/Certificate";
import CertificateForm from "../../../forms/certificate_form/CertificateForm";

class EditCertificates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      certificates: [
        {
          name: "Computer Science",
          description: "BSC ",
          startTime: "2016",
          endTime: "2012",
          siteLink: "https://www.google.co.il",
        },
        {
          name: "Computer Science",
          description: "BSC ",
          startTime: "2016",
          endTime: "2012",
          siteLink: "https://www.google.co.il",
        },
        {
          name: "Computer Science",
          description: "BSC ",
          startTime: "2016",
          endTime: "2012",
          siteLink: "https://www.google.co.il",
        },
      ],
    };
  }

  render() {
    return (
      <EditShowList
        title={"Edit your Certificates"}
        list={this.state.certificates}
        formType={CertificateForm}
        object={Certificate}
      />
    );
  }
}

export default EditCertificates;
