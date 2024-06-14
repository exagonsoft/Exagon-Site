import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="pb-20 pt-36">
      <div className="">
        <Spotlight
          className="-top-40 -left-10  md:top-20 md:-left-32 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.04] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] flex flex-col items-center justify-center">
          <h2 className="uppercase w-full tracking-widest text-xs text-center text-blue-100 max-w-80">
            Turning code into magic.
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Your Vision Into Powerful Digital Solutions"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Delivering Custom Software and Innovative Technology to Propel Your
            Business Forward
          </p>
          <a href="#about" className=""><MagicButton text="See Our Work" icon={<FaLocationArrow />} position="right"/></a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
