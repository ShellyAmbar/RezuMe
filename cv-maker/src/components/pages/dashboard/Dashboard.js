import React from "react";
import Welcome from "../../sections/dashborad/welcome/Welcome";
import "../../../App.css";
import Explore from "../../sections/dashborad/explore/Explore";
import Footer from "../../sections/dashborad/footer/Footer";
import Navbar from "../../customs/navbar/Navbar";

export default function Dashboard() {
  return (
    <>
      <Welcome />
      <Explore />
      <Footer />
    </>
  );
}
