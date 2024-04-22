"use client";
import React, { useEffect, useState } from "react";
import { Destination, data } from "../data";
import Image from "next/image";
import Nav from "../components/Nav";
import NavButton from "../components/NavButton";
import { motion } from "framer-motion";
import { zoomin } from "../motion/motion";

function DestinationData() {
  console.log(data.destinations);
  const destination = data.destinations;
  const [view, setview] = useState<Destination>(destination[0]);
  const [active, setactive] = useState<"MOON" | "MARS" | "EUROPA" | "TITAN">(
    "MOON"
  );

  useEffect(() => {
    console.log(active);
    if (active === "MOON") {
      setview(destination[0]);
    } else if (active === "MARS") {
      setview(destination[1]);
    } else if (active === "EUROPA") {
      setview(destination[2]);
    } else if (active === "TITAN") {
      setview(destination[3]);
    }
  }, [active]);
  const Imageanime = () => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="2xl:mx-32 xl:mx-0 2xl:mt-10 xl:mt-20 md:my-14 mx-24  sm:mx-40 lg:mx-72  "
      >
        <Image alt="Moonpng" about="" src={view.images.png}></Image>
      </motion.div>
    );
  };

  const TextAnime = () => {
    return (
      <motion.div
        initial={zoomin.instart}
        whileInView={zoomin.open}
        transition={{ duration: 0.5 }}
        variants={zoomin}
        className="text-center"
      >
        <div className="text-4xl uppercase xl:ms-8">{view.name}</div>
        <div className=" xl:ms-8 text-title max-xl:mx-24 max-sm:mx-6  text-center text-body">{view.description}</div>
        <hr className="mt-10 border-t-1 border-textdark xl:ms-6 xl:me-0 md:mx-24 lg:mx-32 max-sm:mx-6" />
        <div className="grid grid-cols-2 mx-6 mt-10">
          <div className="cols-1">
            <div className="uppercase text-title text-sub2">Avg.distansce</div>
            <div className="uppercase text-xl">{view.distance}</div>
          </div>
          <div className="cols-1">
            <div className="uppercase text-title text-sub2">Est. travel time</div>
            <div className="uppercase text-xl">{view.travel}</div>
          </div>
        </div>
      </motion.div>
    );
  };
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1  gap-10 2xl:mx-64 xl:mx-56  2xl:mt-20 xl:mt-10 max-sm:justify-center ">
      <div className="col-span-1 text-center ">
        <Imageanime></Imageanime>
      </div>
      <div className="col-span-1 ">
        <div className="xl:w-[500px] w-full 2xl:mx-32 xl:me-32 xl:ms-16 mb-16">
          <div className="flex flex-row items-center justify-center">
            <NavButton
              onClick={() => {
                setactive("MOON");
              }}
              ID=""
              name="MOON"
              active={active === "MOON"}
            ></NavButton>
            <NavButton
              onClick={() => {
                setactive("MARS");
              }}
              ID=""
              name="MARS"
              active={active === "MARS"}
            ></NavButton>
            <NavButton
              onClick={() => {
                setactive("EUROPA");
              }}
              ID=""
              name="EUROPA"
              active={active === "EUROPA"}
            ></NavButton>
            <NavButton
              onClick={() => {
                setactive("TITAN");
              }}
              ID=""
              name="TITAN"
              active={active === "TITAN"}
            ></NavButton>
          </div>
          <TextAnime></TextAnime>
        </div>
      </div>
    </div>
  );
}
export default DestinationData;
