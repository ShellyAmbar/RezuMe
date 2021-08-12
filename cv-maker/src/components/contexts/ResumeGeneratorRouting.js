import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import EditPrimaryInfo from "../sections/edit_resume/edit_primary/EditPrimaryInfo";
import EditAbout from "../sections/edit_resume/edit_about/EditAbout";
import EditProfilePhoto from "../sections/edit_resume/edit_profile_photo/EditProfilePhoto";
import EditLinks from "../sections/edit_resume/edit_links/EditLinks";
import EditSkills from "../sections/edit_resume/edit_skills/EditSkills";
import EditProjects from "../sections/edit_resume/edit_projects/EditProjects";
import EditEducations from "../sections/edit_resume/edit_educations/EditEducations";
import EditWorkPlaces from "../sections/edit_resume/edit_work_places/EditWorkPlaces";
import EditContactDetails from "../sections/edit_resume/edit_contacts/EditContactDetails";
import EditCertificates from "../sections/edit_resume/edit_certificates/EditCertificates";
import Layout from "../customs/layout/Layout";
import EditMediaGallery from "../sections/edit_resume/edit_media_gallery/EditMediaGallery";

export default function ResumeGeneratorRouting() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <Layout {...props}>
            <Switch>
              <PrivateRoute
                path="/EditProfilePhoto"
                component={EditProfilePhoto}
              />
              <PrivateRoute path="/EditGallery" component={EditMediaGallery} />
              <PrivateRoute path="/EditLinks" component={EditLinks} />
              <PrivateRoute path="/EditAbout" component={EditAbout} />
              <PrivateRoute path="/EditSkills" component={EditSkills} />
              <PrivateRoute path="/EditEducations" component={EditEducations} />
              <PrivateRoute path="/EditProjects" component={EditProjects} />
              <PrivateRoute path="/EditWorkPlaces" component={EditWorkPlaces} />
              <PrivateRoute
                path="/EditCertificates"
                component={EditCertificates}
              />
              <PrivateRoute
                path="/EditContactDetails"
                component={EditContactDetails}
              />
            </Switch>
          </Layout>
        )}
      />
    </BrowserRouter>
  );
}
