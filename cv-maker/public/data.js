import React from "react";

const User = {
  id: 1,
  generalInfo: {
    firstname: "Robin",
    lastname: "Wieruch",
    birthDate: "04/04/1994",
    userPhoto: "",
    backgroundPhoto: "",
    professionalStatus: "",
    summery: "",
  },
  contactInfo: {
    email: "dfffdg@gmail.com",
    phone: "31324132423",
    adress: {
      city: "ramat gan",
      country: "israel",
    },
  },
  languages: [
    {
      language: "hebrew",
      level: "5/5",
    },
    {
      language: "english",
      level: "5/5",
    },
  ],
  skills: [
    {
      titlt: "Java",
      expirienceTime: "",
      level: "5/5",
    },
    {
      titlt: "C#",
      expirienceTime: "",
      level: "5/5",
    },
  ],
  institutions: [
    {
      institusionName: "",
      description: "",
      startTime: "",
      endTime: "",
      courses: ["", ""],
    },
  ],
  projects: [
    {
      name: "project1",
      description: "",
      startTime: "",
      endTime: "",
      skills: ["", ""],
      youtubeLink: "",
      gitLink: "",
      siteLink: "",
    },
  ],
  certificates: [
    {
      titlt: "project1",
      summary: "",
    },
  ],
  workPlaces: [
    {
      companyName: "company",
      companySummary: "",
      startTime: "",
      endTime: "",
      jobTitle: "",
      jobSummary: "",
      achivments: ["", ""],
      tasks: ["", ""],
      conacts: [{ name: "", phone: "" }],
    },
  ],
};
