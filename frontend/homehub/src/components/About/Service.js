import React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import GroupIcon from "@mui/icons-material/Group";

const Service = (props) => {
  // TODO: use the right icons for each service.

  return (
    <div>
      <div className="max-w-[1440px] ml-16 mx-auto py-10  flex-col justify-between text-center md:flex-row relative ">
        {/* property-card-container */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 py-10">
          <div>
            {/* section label */}
            <div className="p-6 md:text-left md:mt-[8s%]">
              <h3 className="text-[#74c69d] "> {props.label} </h3>
              <h2 className="md:max-w-[70%]font-bold mt-6 text-4xl text-[#74c69d]">{props.header}</h2>
              <p className="text-2xl font-extralight mt-4 "> {props.text} </p>
            </div>
          </div>
          <div className="md:ml-8 grid grid-cols-2 gap-4 md:gap-x-8 text-left mr-16">
            <div className="p-4 md:p-8 rounded-[25px] rounded-tr-none text-[#29434e]   bg-[#FFFFFF] hover:bg-[#F2F2F2] hover:border hover:border-[#EAEAEA] shadow-[#74c69d] shadow-md duration-500">
              <ApartmentIcon className="bigIcon"></ApartmentIcon>
              <h4 className="text-[#74c69d]">Buy Property</h4>
              <p>With our vast search tool, you can find your dream home from anywhere in the world.</p>
            </div>
            <div className="p-4 md:p-8 rounded-[25px] rounded-tr-none text-[#29434e]   bg-[#FFFFFF] hover:bg-[#F2F2F2] hover:border hover:border-[#EAEAEA] shadow-[#74c69d] shadow-md duration-500">

              <ApartmentIcon className="bigIcon"></ApartmentIcon>
              <h4 className="text-[#74c69d]">Sell Property</h4>
              <p>With our vast search tool, you can find your dream home from anywhere in the world.</p>
            </div>

            <div className="p-4 md:p-8 rounded-[25px] rounded-tr-none text-[#29434e]   bg-[#FFFFFF] hover:bg-[#F2F2F2] hover:border hover:border-[#EAEAEA] shadow-[#74c69d] shadow-md duration-500">
              <ApartmentIcon className="bigIcon"></ApartmentIcon>
              <h4 className="text-[#74c69d]">Rent Property</h4>
              <p>With our vast search tool, you can find your dream home from anywhere in the world.</p>
            </div>

            <div className="p-4 md:p-8 rounded-[25px] rounded-tr-none text-[#29434e]   bg-[#FFFFFF] hover:bg-[#F2F2F2] hover:border shadow-[#74c69d] shadow-md hover:border-[#EAEAEA] duration-500">
              <GroupIcon className="bigIcon"></GroupIcon>
              <h4 className="text-[#74c69d]">Property Agent</h4>
              <p>With our vast search tool, you can find your dream home from anywhere in the world.</p>
            </div>
          </div>
        </div>
        <div className="w-full pt-4 pb-8 items-center md:absolute top-[67%] left-[-41%]">
          <button className="mt-6 bg-[#74c69d] hover:bg-[#5a8e71]">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
