import React, { useEffect, useState } from "react";
import NavButton from "./NavButton";
import Logo from "../assets/shared/logo.svg";
import Logo2 from "../assets/shared/icon-hamburger.svg";
import Logo3 from "../assets/shared/icon-close.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import NavButtonMobile from "./NavButtonMobile";

type Propstype = {
  active: "Home" | "Destination" | "Crew" | "Technology";
};
function Nav(props: Propstype) {
  const [isOpen, setIsOpen] = useState<"close" | "open">("close");


  
  return (
    <div className="grid grid-cols-5 md:gap-4 gap-0 xl:py-10  w-screen overflow-hidden">
      <div className="col-span-2 ">
        <div className="flex flex-row items-center h-full">
          <Image
            src={Logo}
            width={50}
            height={50}
            className="md:ms-10 ms-6 mt-6 cursor-pointer"
            alt="Picture of the author"
          ></Image>
        </div>
        <div className="2xl:w-[550px] xl:w-[470px] 2xl:ms-64 xl:ms-40 max-lg:hidden xl:block  relative -top-[40px] z-10">
          <hr className="border-t-1 border-textdark "></hr>
        </div>
      </div>
      <div className="col-span-1 md:hidden"></div>
      <div
        className="col-span-2 md:hidden absolute right-0"
        onClick={() => {
          if(isOpen === "close"){
          setIsOpen("open");
          }
        }}
      >
        <Image
          src={Logo2}
          width={24}
          height={24}
          className="mt-8 me-6 cursor-pointer "
          alt="Picture of the author"
        ></Image>
      </div>
      <div className="col-span-3 bg-white/10 backdrop-blur-xl text-heading top-12 right-0 text-[16px]  xl:ps-32  xl:pe-40 max-sm:hidden">
        <div className="flex flex-row justify-evenly   items-center">
          <NavButton
            href="/"
            ID="00"
            name="Home"
            active={props.active === "Home"}
          ></NavButton>
          <NavButton
            href="/Destination"
            ID="01"
            name="Destination"
            active={props.active === "Destination"}
          ></NavButton>
          <NavButton
            href="/Crew"
            ID="02"
            name="Crew"
            active={props.active === "Crew"}
          ></NavButton>
          <NavButton
            href="/Technology"
            ID="03"
            name="Technology"
            active={props.active === "Technology"}
          ></NavButton>
        </div>
      </div>
      <motion.div
        className={
          "absolute w-80 h-screen backdrop-blur-xl bg-white/10 right-0 sm:hidden"
        }
        id="mobileMenu"
        initial={{ opacity: 1, x: 320 }}
        animate={
          isOpen === "open" ? { opacity: 1, x: 0 } : { opacity: 1, x: 320 }
        }
        transition={{ duration: 0.7, ease: [0.64, 0.09, 0.08, 1] }}
      >
        <div className="flex flex-col flex-wrap">
          <div
            className="absolute right-0 "
            onClick={() => {
              if(isOpen==='open'){
              setIsOpen("close");
              }
            }}
          >
            <Image
              src={Logo3}
              width={20}
              height={20}
              className="mt-[34px] me-6 cursor-pointer"
              alt="Picture of the author"
            ></Image>
          </div>
          <div className="h-[120px] border-e-white">
          </div>
          <NavButtonMobile
            href="/"
            ID="00"
            name="Home"
            active={props.active === "Home"}
          ></NavButtonMobile>
          <NavButtonMobile
            href="/Destination"
            ID="01"
            name="Destination"
            active={props.active === "Destination"}
          ></NavButtonMobile>
          <NavButtonMobile
            href="/Crew"
            ID="02"
            name="Crew"
            active={props.active === "Crew"}
          ></NavButtonMobile>
          <NavButtonMobile
            href="/Technology"
            ID="03"
            name="Technology"
            active={props.active === "Technology"}
          ></NavButtonMobile>
        </div>
      </motion.div>
    </div>
  );
}

export default Nav;
