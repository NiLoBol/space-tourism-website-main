"use client";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { CrewMember, Destination, Technology, data } from "../data";
import Image from "next/image";
import { Zoomin } from "../motion/Exportmotion";

function page() {
  const Technology = data.technology;
  const [index, setindex] = useState<number>(1);
  const [view, setview] = useState<Technology>(Technology[0]);
  console.log(Technology);


  useEffect(() => {
    setview(Technology[index - 1]);
  }, [index])
  
  const Imagedetail = () => {
    return (
      <Zoomin className="2xl:ms-16 absolute right-0">
        <Image
          className=" 2xl:w-[550px] max-lg:hidden"
          alt="Moonpng"
          about=""
          src={view.images.portrait}
        ></Image>
      </Zoomin>
    );
  };
  return (
    <div className="h-screen bg-Technology-Desktop bg-cover bg-no-repeat text-heading overflow-hidden ">
      <Nav active="Technology"></Nav>

      <div className="grid xl:grid-cols-2 grid-cols-1  2xl:gap-10 xl:gap-0 2xl:mx-64 xl:mx-40 mt-10">
        <div className="col-span-1 ">
          <div className="uppercase text-heading text-xl mb-8 max-md:text-center md:ms-10 lg:ms-0 ">
            <span className="text-textdark">03</span> SPACE LAUNCH 101
          </div>
          <Image
          className=" 2xl:w-[550px] lg:hidden my-8"
          alt="Moonpng"
          about=""
          src={view.images.landscape}
        ></Image>
          <div className="flex flex-row max-lg:flex-wrap ">
            <div className="lg:basis-3/12 basis-full max-lg:flex max-lg:flex-row max-lg:justify-center">
              <div className="my-5 ">
                <button
                  onClick={() => {
                    setindex(1);
                  }}
                  className={
                    "border-[2px]  xl:w-20 md:w-15 w-10 xl:h-20 md:h-15 h-10 mx-2  text-xl hover:border-white " +
                    (index == 1 ? "text-darkbg bg-heading border-white" : "border-textdark") +
                    " rounded-full border-textdark"
                  }
                >
                  1
                </button>
              </div>

              <div className="my-5">
                <button
                  onClick={() => {
                    setindex(2);
                  }}
                  className={
                    "border-[2px]  xl:w-20 md:w-15 w-10 xl:h-20 md:h-15 h-10 mx-2  text-xl hover:border-white " +
                    (index == 2 ? "text-darkbg bg-heading border-white" : "border-textdark") +
                    " rounded-full border-textdark"
                  }
                >
                  2
                </button>
              </div>

              <div className="my-5">
                <button
                  onClick={() => {
                    setindex(3);
                  }}
                  className={
                    "border-[2px]  xl:w-20 md:w-15 w-10 xl:h-20 md:h-15 h-10 mx-2  text-xl hover:border-white " +
                    (index == 3 ? "text-darkbg bg-heading border-white" : "border-textdark") +
                    " rounded-full border-textdark"
                  }
                >
                  3
                </button>
              </div>
            </div>
            <div className="lg:basis-9/12 basis-full">
              <div className="max-lg:text-center max-lg:mx-6">
                <div className="text-textdark text-lg">THE TERMINOLOGY…</div>
                <div className="text-3xl uppercase mb-5">{view.name}</div>
                <div className="text-sub2 text-title xl:w-[450px] max-sm:mx-6 max-lg:mx-28">
                  {view.description}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 ">
          <div className=" ">
            <Imagedetail></Imagedetail>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
