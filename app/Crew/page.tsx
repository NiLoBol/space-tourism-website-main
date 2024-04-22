"use client";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { CrewMember, Destination, data } from "../data";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zoomin } from "../motion/Exportmotion";

function page() {
  const crew = data.crew;
  const [view, setview] = useState<CrewMember>(crew[0]);
  console.log(crew);

  const [active, setactive] = useState<1 | 2 | 3 | 4>(1);

  useEffect(() => {
    setview(crew[active - 1]);
  }, [active]);

  const Imagedetail = () => {
    return (
      <div className="max-sm:px-6 max-sm:mb-8">
        <Zoomin>
          <Image
            className="2xl:h-[640px] xl:h-[680px]  md:h-[570px] h-[223px] max-sm:border-b-[1px]  border-textdark object-contain w-full 2xl:mt-20 xl:mt-20"
            alt="Moonpng"
            about=""
            src={view.images.png}
          ></Image>
        </Zoomin>
      </div>
    );
  };
  return (
    <div className="h-screen bg-Crew-Desktop bg-cover bg-no-repeat text-heading md:overflow-hidden max-sm:touch-none ">
      <Nav active="Crew"></Nav>

      <div className="grid grid-cols-11  2xl:gap-10 xl:gap-0 2xl:mx-64 xl:ms-40 xl:me-20 mt-10">
        <div className="xl:col-span-5 col-span-full">
          <div className="uppercase text-heading text-xl xl:mb-36 md:mb-[60px] mb-8  lg:mx-0 md:ms-10 max-sm:text-center">
            <span className="text-textdark">02</span> MEET YOUR CREW
          </div>
          {/* mobile */}
          <div className="sm:hidden">
            <Imagedetail></Imagedetail>
          </div>
          <div className="flex justify-center sm:hidden mb-8 ">
            <div
              className={
                active == 1
                  ? "2xl:w-5 xl:w-4  w-[10px] 2xl:h-5 xl:h-4 h-[10px] rounded-full cursor-pointer 2xl:me-6 me-4 bg-heading"
                  : "2xl:w-5 xl:w-4  w-[10px] 2xl:h-5 xl:h-4 h-[10px] rounded-full cursor-pointer 2xl:me-6 me-4 bg-textdark"
              }
              onClick={() => setactive(1)}
            ></div>

            <div
              className={
                active == 2
                  ? "2xl:w-5 xl:w-4  w-[10px] 2xl:h-5 xl:h-4 h-[10px] rounded-full cursor-pointer 2xl:me-6 me-4 bg-heading"
                  : "2xl:w-5 xl:w-4  w-[10px] 2xl:h-5 xl:h-4 h-[10px] rounded-full cursor-pointer 2xl:me-6 me-4 bg-textdark"
              }
              onClick={() => setactive(2)}
            ></div>
            <div
              className={
                active == 3
                  ? "2xl:w-5 xl:w-4  w-[10px] 2xl:h-5 xl:h-4 h-[10px] rounded-full cursor-pointer 2xl:me-6 me-4 bg-heading"
                  : "2xl:w-5 xl:w-4  w-[10px] 2xl:h-5 xl:h-4 h-[10px] rounded-full cursor-pointer 2xl:me-6 me-4 bg-textdark"
              }
              onClick={() => setactive(3)}
            ></div>
            <div
              className={
                active == 4
                  ? "2xl:w-5 xl:w-4  w-[10px] 2xl:h-5 xl:h-4 h-[10px] rounded-full cursor-pointer 2xl:me-6 me-4 bg-heading"
                  : "2xl:w-5 xl:w-4  w-[10px] 2xl:h-5 xl:h-4 h-[10px] rounded-full cursor-pointer 2xl:me-6 me-4 bg-textdark"
              }
              onClick={() => setactive(4)}
            ></div>
          </div>
          {/* mobile */}
          <div className="max-lg:text-center">
            <div className="text-textdark text-2xl uppercase">{view.role}</div>
            <div className="text-3xl uppercase mb-5">{view.name}</div>
            <div className="text-sub2 text-title xl:w-[450px] lg:mx-0 md:mx-40 mx-6 lg:h-48 md:mb-10 lg:mb-0">
              {view.bio}
            </div>
          </div>

          <div className="flex justify-center max-sm:hidden">
            <div
              className={
                active == 1
                  ? "2xl:w-5 xl:w-4  w-[10px] 2xl:h-5 xl:h-4 h-[10px] rounded-full cursor-pointer 2xl:me-6 me-4 bg-heading"
                  : "2xl:w-5 xl:w-4  w-[10px] 2xl:h-5 xl:h-4 h-[10px] rounded-full cursor-pointer 2xl:me-6 me-4 bg-textdark"
              }
              onClick={() => setactive(1)}
            ></div>

            <div
              className={
                active == 2
                  ? "2xl:w-5 xl:w-4  w-[10px] 2xl:h-5 xl:h-4 h-[10px] rounded-full cursor-pointer 2xl:me-6 me-4 bg-heading"
                  : "2xl:w-5 xl:w-4  w-[10px] 2xl:h-5 xl:h-4 h-[10px] rounded-full cursor-pointer 2xl:me-6 me-4 bg-textdark"
              }
              onClick={() => setactive(2)}
            ></div>
            <div
              className={
                active == 3
                  ? "2xl:w-5 xl:w-4  w-[10px] 2xl:h-5 xl:h-4 h-[10px] rounded-full cursor-pointer 2xl:me-6 me-4 bg-heading"
                  : "2xl:w-5 xl:w-4  w-[10px] 2xl:h-5 xl:h-4 h-[10px] rounded-full cursor-pointer 2xl:me-6 me-4 bg-textdark"
              }
              onClick={() => setactive(3)}
            ></div>
            <div
              className={
                active == 4
                  ? "2xl:w-5 xl:w-4  w-[10px] 2xl:h-5 xl:h-4 h-[10px] rounded-full cursor-pointer 2xl:me-6 me-4 bg-heading"
                  : "2xl:w-5 xl:w-4  w-[10px] 2xl:h-5 xl:h-4 h-[10px] rounded-full cursor-pointer 2xl:me-6 me-4 bg-textdark"
              }
              onClick={() => setactive(4)}
            ></div>
          </div>
        </div>
        <div className="xl:col-span-6 col-span-full max-sm:hidden ">
          <Imagedetail></Imagedetail>
        </div>
      </div>
    </div>
  );
}

export default page;
