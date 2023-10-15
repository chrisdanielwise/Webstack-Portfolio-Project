import React from "react";
import Header from "../Header/Header";
import Service from "./Service";
import Footer from "../Footer/Footer";
// import SearchBar from "../utils/SearchBar";
import Credibility from "./Credibility";
import Team from "./Team";

function About() {
  return (
    <div className=" About">
      <Header />
      <Service
        label="About Us"
        header="We Provide The Best Property For You"
        text="With our vast search tool, you can find your dream home at Shelter Africque Estate in Uyo."
      />

      {/* <SearchBar header="Let's Find A Property That Meets Your Need" /> */}
      <br className=""></br>
      <Credibility header="Why Trust Us" text="We Guarantee Quality Delivery" />
      <Team header="Our Team" text="Meet Our Amazing Team" />
      <Footer />
    </div>
  );
}

export default About;
