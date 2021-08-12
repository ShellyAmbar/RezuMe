import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import LogIn from "./components/pages/login/LogIn";
import SignUp from "./components/pages/signup/SignUp";
import Dashboard from "./components/pages/dashboard/Dashboard";
import ResumeGenerator from "./components/pages/resume_generator/ResumeGenerator";
import Resume from "./components/pages/resume/Resume";
import ResumesGallery from "./components/pages/resumes_gallery/ResumesGallery";
import RecreatePassword from "./components/pages/reset_password/ResetPassword";
import UpdatePasswordEmail from "./components/pages/update_password_email/UpdatePasswordEmail";
import { Link } from "react-router-dom";

import { useAuth } from "../src/components/contexts/AuthContext";
import Navbar from "./components/customs/navbar/Navbar";

function App() {
  return <></>;
}

export default App;
