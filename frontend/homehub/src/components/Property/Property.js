import React from "react";
//import React, {useState, useEffect} from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import FeaturedProperty from "../Property/FeaturedProperty";
import MoreProperty from "./MoreProperty";
import Footer from "../Footer/Footer";
import SearchBar from "../utils/SearchBar";
import useFetch  from "../utils/useFetch";
import ExpertCard from "../utils/ExpertCard";


function Property() {

  
  const {items} = useFetch()
  
  return (
    <div className="Property">
      <Header />
      <Hero header="Discover More suitable properties across the world" />

      <SearchBar />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          <div className="p-2">
            <ExpertCard name="" linkedin="" contact="" img={"https://www.galleryestate.net/storage/properties/2451/photos/3.jpg"}/>
          </div>
          <div className="p-2">
            <ExpertCard name="" linkedin="" contact="" img={"https://www.galleryestate.net/storage/properties/1739/photos/3.jpeg"}/>
          </div>
          <div className="p-2">
            <ExpertCard name="" linkedin="" contact="" img={"https://www.galleryestate.net/storage/properties/199/photos/13.jpg"}/>
          </div>
          <div className="p-2">
            <ExpertCard name="" linkedin="" contact="" img={"https://www.galleryestate.net/storage/properties/199/photos/10.jpg"}/>
          </div>
          <div className="p-2">
            <ExpertCard name="" linkedin="" contact="" img={"https://www.galleryestate.net/storage/properties/199/photos/8.jpg"}/>
          </div>
          <div className="p-2">
            <ExpertCard name="" linkedin="" contact="" img={"https://www.galleryestate.net/storage/properties/2343/photos/11.jpeg"}/>
          </div>
          <div className="p-2">
            <ExpertCard name="" linkedin="" contact="" img={"https://www.galleryestate.net/storage/properties/2451/photos/2.jpg"}/>
          </div>
          <div className="p-2">
            <ExpertCard name="" linkedin="" contact="" img={"https://www.galleryestate.net/storage/properties/2451/photos/7.jpg"}/>
          </div>
        </div>
    
      <FeaturedProperty header="Featured Properties" text="Check Out The top rated Properties around the World " items={items} />
      
      {/* <MoreProperty /> */}
      <Footer />
    </div>
  );
}

export default Property;