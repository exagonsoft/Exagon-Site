"use client"

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradienBg";
import { GlobeDemo } from "./GithubGlobe";
import { techs, techs2 } from "@/data";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid auto-rows-min grid-cols-1 md:grid-cols-5 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  titleClassName,
  description,
  img,
  imgClassName,
  id,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  titleClassName?: string;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  id: number;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('exagonsoft@exagon-soft.com');
    setCopied(true)
  }
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        backgroundColor: "rgb(4,7,29)",
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt="image"
              className={cn(imgClassName, "object-cover, object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt="image"
              className={"object-cover object-center w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 z-40 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-50">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-50">
            {title}
          </div>
          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-3 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-2 lg:gap-3">
                {techs.map((item, index) => (
                  <span
                    key={index}
                    className="py-2 lg:py4 lg:px-1 px-2 text-xs lg:text-md opacity-50 lg:opacity-100 rounded-lg text-center bg-[#20233f]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-2 px-1 rounded-lg text-center bg-[#10132e]" />
              </div>
              <div className="flex flex-col gap-2 lg:gap-3">
                <span className="py-2 px-1 rounded-lg text-center bg-[#10132e]" />
                {techs2.map((item, index) => (
                  <span
                    key={index}
                    className="py-2 lg:py4 lg:px-1 px-2 text-xs lg:text-md opacity-50 lg:opacity-100 rounded-lg text-center bg-[#20233f]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">
                <Lottie options={
                  {
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio:'xMidYMid slice'
                    }
                  }
                }/>
              </div>
              <MagicButton text={copied ? 'Email Copied' : 'Copy our Email'} icon={<IoCopyOutline/>} position="left" otherClasses="!bg-[#161a31]" handleClick={handleCopyEmail}/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
