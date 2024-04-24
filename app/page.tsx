'use client'
import Image from "next/image";
import Nav from "./components/Nav";
import bgimg from "./assets/home/background-home-desktop.jpg";
import { useEffect, useState } from "react";


export default function Home() {
    return (
      <div className="min-h-screen md:bg-homeTBG xl:bg-homeDBG max-sm:bg-homeMBG  bg-cover max-sm:touch-none">
        <Nav active="Home"></Nav>

        {/* ///main content here/// */}
        <div className="flex flex-row  2xl:mx-52 2xl:mt-52 xl:mx-32 mt-32 max-lg:mt-24">
          <div className="xl:basis-1/2 basis-full">
            <div className="sm:mx-auto mx-6 md:w-[500px]  max-lg:text-center ">
              <div className="text-title text-sub1 uppercase ">
                So, you want to travel to
              </div>
              <div className="text-head text-heading uppercase">
                Space
              </div>
              <div className="text-title text-body ">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </div>
            </div>
          </div>
          <div className="xl:basis-1/2 basis-full">
              <div className="text-darkbg text-2xl bg-heading border-[3px]
               border-heading xl:w-72 xl:h-72 md:h-64 md:w-64 w-40 h-40 xl:p-16 md:p-14 px-2 pt-4 
               rounded-[50%] xl:ms-80 mx-auto mt-28  
               hover:xl:shadow-Exploredasktop hover:md:shadow-Exploretablet 
               hover:shadow-Exploremobile transition delay-0 duration-200 
               ease-in-out shadow-stoned">
              <div className="w-36 h-36 text-center pt-12 uppercase ">
                Explore
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
}
