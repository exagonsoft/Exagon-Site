import Image from "next/image";
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer id="contact" className="w-full pt-20 pb-10">
      <div className="w-full absolute left-0 bottom-16 min-h-72">
        <Image
          alt="footer-grid"
          width={50}
          height={50}
          className="w-full h-full opacity-20"
          src="/footer-grid.svg"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple uppercase">your idea</span>{" "}
          to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:exagonsoft@exagon-soft.com" className="">
          <MagicButton
            text="Les't get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 gap-8 md:flex-row flex-col justify-center items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-center">{`Copyright © 2013-${new Date().getFullYear()} Exagon-Soft. All Rights Reserved`}</p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image
                src={profile.img}
                alt={profile.id.toString()}
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
