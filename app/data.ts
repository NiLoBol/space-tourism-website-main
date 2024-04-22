import { StaticImageData } from "next/image";
//Destination
import Moonpng from "./assets/destination/image-moon.png";
import Moonwebp from "./assets/destination/image-moon.webp";
import Marspng from "./assets/destination/image-mars.png";
import Marswebp from "./assets/destination/image-mars.webp";
import Europapng from "./assets/destination/image-europa.png";
import Europawebp from "./assets/destination/image-europa.webp";
import Titanpng from "./assets/destination/image-titan.png";
import Titanwebp from "./assets/destination/image-titan.webp";
//crew
import Douglaspng from "./assets/crew/image-douglas-hurley.png";
import Douglaswebp from "./assets/crew/image-douglas-hurley.webp";
import Markpng from "./assets/crew/image-mark-shuttleworth.png";
import Markwebp from "./assets/crew/image-mark-shuttleworth.webp";
import Victorpng from "./assets/crew/image-victor-glover.png";
import Victorwebp from "./assets/crew/image-victor-glover.webp";
import Anoushehpng from "./assets/crew/image-anousheh-ansari.png";
import Anoushehwebp from "./assets/crew/image-anousheh-ansari.webp";

//technology

import Launchportrait from "./assets/technology/image-launch-vehicle-portrait.jpg";
import Launchlandscape from "./assets/technology/image-launch-vehicle-landscape.jpg";
import Spaceportportrait from "./assets/technology/image-spaceport-portrait.jpg";
import Spaceportlandscape from "./assets/technology/image-spaceport-landscape.jpg";
import Spaceportrait from "./assets/technology/image-space-capsule-portrait.jpg";
import Spacelandscape from "./assets/technology/image-space-capsule-landscape.jpg";

export type Destination = {
  name: string;
  images: {
    png: StaticImageData;
    webp: StaticImageData;
  };
  description: string;
  distance: string;
  travel: string;
};

export type CrewMember = {
  name: string;
  images: {
    png: StaticImageData;
    webp: StaticImageData;
  };
  role: string;
  bio: string;
};

export type Technology = {
  name: string;
  images: {
    portrait: StaticImageData;
    landscape: StaticImageData;
  };
  description: string;
};

export type DataType = {
  destinations: Destination[];
  crew: CrewMember[];
  technology: Technology[];
};

export const data: DataType = {
  destinations: [
    {
      name: "Moon",
      images: {
        png: Moonpng,
        webp: Moonwebp,
      },
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      name: "Mars",
      images: {
        png: Marspng,
        webp: Marswebp,
      },
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      name: "Europa",
      images: {
        png: Europapng,
        webp: Europawebp,
      },
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years",
    },
    {
      name: "Titan",
      images: {
        png: Titanpng,
        webp: Titanwebp,
      },
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years",
    },
  ],
  crew: [
    {
      name: "Douglas Hurley",
      images: {
        png: Douglaspng,
        webp: Douglaswebp,
      },
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      name: "Mark Shuttleworth",
      images: {
        png: Markpng,
        webp: Markwebp,
      },
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      name: "Victor Glover",
      images: {
        png: Victorpng,
        webp: Victorwebp,
      },
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      name: "Anousheh Ansari",
      images: {
        png: Anoushehpng,
        webp: Anoushehwebp,
      },
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ],
  technology: [
    {
      name: "Launch vehicle",
      images: {
        portrait: Launchportrait,
        landscape: Launchlandscape,
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "Spaceport",
      images: {
        portrait: Spaceportportrait,
        landscape: Spaceportlandscape,
      },
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      name: "Space capsule",
      images: {
        portrait: Spaceportrait,
        landscape: Spacelandscape,
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ],
};
