import React from "react";

import PrimaryInfo from "../../sections/resume/primaryInfo/PrimaryInfo";
import Projects from "../../sections/resume/Projects/Projects";
import WorkPlaces from "../../sections/resume/WorkPlaces/WorkPlaces";
import Recommendations from "../../sections/resume/Recommendations/Recommendations";
import Educations from "../../sections/resume/Educations/Educations";
import ContactMe from "../../sections/resume/ContactMe";
import About from "../../sections/resume/About/About";
import NavBarScroll from "../../customs/nab_bar_scroll/NavBarScroll";
import "./Resume.js";

export default function resume() {
  return (
    <div className="container_resume">
      <NavBarScroll />
      <section id="Info">
        <PrimaryInfo fullName={"Shelly Ambar"} about={"bla bla bla bla"} />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="WorkPlaces">
        <WorkPlaces />
      </section>
      <section id="Educations">
        <Educations />
      </section>
      <section id="Recommendations">
        <Recommendations />
      </section>
      <section id="ContactMe">
        <ContactMe />
      </section>
    </div>
  );
}
