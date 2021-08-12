import React from "react";
import ExploreItem from "../../../items/exploreItem/ExploreItem";
import "../explore/Explore.css";

function Explore() {
  return (
    <div className="cards">
      <h1 className="h1">Explore our Resumes and get inspire </h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <ExploreItem
              src="images/9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <ExploreItem
              src="images/2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards_items">
            <ExploreItem
              src="images/3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <ExploreItem
              src="images/4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />

            <ExploreItem
              src="images/8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Explore;
