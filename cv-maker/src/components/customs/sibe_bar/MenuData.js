import { Icon } from "@material-ui/core";
import React from "react";
import AddAPhotoIcon from "@material-ui/icons/Photo";
import PhotoAlbum from "@material-ui/icons/PhotoCamera";
import AttachmentIcon from "@material-ui/icons/Attachment";
import InfoIcon from "@material-ui/icons/Info";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import BrushIcon from "@material-ui/icons/Brush";
import FolderIcon from "@material-ui/icons/Folder";

export const MenuData = [
  {
    title: "Photo",
    icon: <AddAPhotoIcon />,
    link: "/EditProfilePhoto",
  },

  {
    title: "Gallery",
    icon: <PhotoAlbum />,
    link: "/EditGallery",
  },

  {
    title: "Links",
    icon: <AttachmentIcon />,
    link: "/EditLinks",
  },
  {
    title: "About",
    icon: <InfoIcon />,
    link: "/EditAbout",
  },
  {
    title: "Skills",
    icon: <BrushIcon />,
    link: "/EditSkills",
  },
  {
    title: "Education",
    icon: <SchoolIcon />,
    link: "/EditEducations",
  },
  {
    title: "Projects",
    icon: <FolderIcon />,
    link: "/EditProjects",
  },
  {
    title: "Work Places",
    icon: <WorkIcon />,
    link: "/EditWorkPlaces",
  },
  {
    title: "Certificates",
    icon: <VerifiedUserIcon />,
    link: "/EditCertificates",
  },
  {
    title: "Contact Details",
    icon: <PermContactCalendarIcon />,
    link: "/EditContactDetails",
  },
];
