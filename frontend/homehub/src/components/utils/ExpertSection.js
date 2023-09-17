import React from "react";
import ExpertCard from "./ExpertCard";
import { NavLink } from "react-router-dom";
import Emma from "../../assets/john.jpeg";
import Milly from "../../assets/sharon.jpeg";
import Robert from "../../assets/mark.jpeg";
import Zeliq from "../../assets/fortune.jpeg";

const ExpertSection = (props) => {
  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto py-20 px-10 flex-col justify-between text-center md:flex-row">
        {/* section label */}
        <div className="py-10">
          <h3 className="text-[#74c69d]"> {props.header} </h3>
          <h5 className="pt-4"> {props.text} </h5>
        </div>

        {/* property-card-container */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-2">
            <ExpertCard name="Brown Jane" linkedin="" contact="" img={Emma}/>
          </div>
          <div className="p-2">
            <ExpertCard name="Joy Frank" linkedin="" contact="" img={Milly}/>
          </div>
          <div className="p-2">
            <ExpertCard name="Sunday Mathew" linkedin="" contact="" img={Robert}/>
          </div>
          <div className="p-2">
            <ExpertCard name="Robert Mark" linkedin="" contact="" img={Zeliq}/>
          </div>
        </div>
        <div className="w-full pt-10 flex justify-center">
          <button className="mx-4 bg-[#74c69d] hover:bg-[#5a8e71]">Load More</button>
          <button className="mx-4 bg-[#74c69d] hover:bg-[#5a8e71]">
            <NavLink className="" to="/AgentForm">
              Become Agent
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertSection;
