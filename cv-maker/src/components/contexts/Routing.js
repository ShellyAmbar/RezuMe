import React, { useState } from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/dashboard/Dashboard";
import ResumeGenerator from "../pages/resume_generator/ResumeGenerator";
import Resume from "../pages/resume/Resume";
import ResumesGallery from "../pages/resumes_gallery/ResumesGallery";
import RecreatePassword from "../pages/reset_password/ResetPassword";
import UpdatePasswordEmail from "../pages/update_password_email/UpdatePasswordEmail";

import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/signup/SignUp";
import Profile from "../pages/profile/Profile";

import Navbar from "../customs/navbar/Navbar";
export default function Routing() {
  const [registerStatus, setRegisterStatus] = useState("Sign Up");

  const setStatus = (status) => {
    setRegisterStatus(status);
  };
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/LogIn" component={LogIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/ResetPassword" component={RecreatePassword} />
          <PrivateRoute path="/ResumeGenerator" component={ResumeGenerator} />
          <PrivateRoute path="/ResumesGallery" component={ResumesGallery} />
          <PrivateRoute path="/Resume" component={Resume} />
          <PrivateRoute path="/Profile" component={Profile} />
          <Route path="/UpdatePasswordEmail" component={UpdatePasswordEmail} />
        </Switch>
      </Router>
    </div>
  );
}
