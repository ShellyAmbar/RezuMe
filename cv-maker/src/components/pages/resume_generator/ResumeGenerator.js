import React from "react";
import EditCertificates from "../../sections/edit_resume/edit_certificates/EditCertificates";
import EditEducations from "../../sections/edit_resume/edit_educations/EditEducations";

import EditSkills from "../../sections/edit_resume/edit_skills/EditSkills";

import PrimaryInfo from "../../sections/resume/primaryInfo/PrimaryInfo";

import SideBar from "../../customs/sibe_bar/SideBar";
import "./ResumeGenerator.css";
import ResumeGeneratorRouting from "../../contexts/ResumeGeneratorRouting";

export default function ResumeGenerator() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <SideBar />
      <ResumeGeneratorRouting />
    </div>
  );
}
