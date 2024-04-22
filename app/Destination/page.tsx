"use client";
import React, { useEffect, useState } from "react";
import { Destination, data } from "../data";
import Image from "next/image";
import Nav from "../components/Nav";
import NavButton from "../components/NavButton";
import { motion } from "framer-motion";
import DestinationData from "../components/DestinationData";
function page() {
  console.log(data.destinations);
  const destination = data.destinations;
  const [view, setview] = useState<Destination>(destination[0]);
  const [active, setactive] = useState<"MOON"|"MARS"|"EUROPA"|"TITAN">("MOON");

  useEffect(() => {
    console.log(active);
    if(active === "MOON"){
      setview(destination[0]);
    }
    else if(active === "MARS"){
      setview(destination[1]);
    }
    else if(active === "EUROPA"){
      setview(destination[2]);
    }
    else if(active === "TITAN"){
      setview(destination[3]);
    }
    
  }, [active]);

  return (
    <div className="min-h-screen bg-DestinationBG-Desktop bg-cover bg-no-repeat text-heading">
      <Nav active="Destination"></Nav>
      <div className="uppercase text-heading text-sub1 2xl:ms-64 xl:ms-40 md:ms-10 max-sm:text-center 2xl:mt-16 xl:mt-12 md:mt-10 my-6 ">
        {" "}
        <span className="text-textdark">01</span> Pick your destination
      </div>

      <DestinationData>
      </DestinationData>
    </div>
  );
}

export default page;
