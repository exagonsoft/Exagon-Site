import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { companies, testimonials } from "@/data";
import MagicButton from "./ui/MagicButton";
import { FaComment } from "react-icons/fa";
import Image from "next/image";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind comments from
        <span className="text-purple"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10 mt-20">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="w-full flex justify-center items-center"><MagicButton text="Give me your Feedback" icon={<FaComment />} position="right"/></div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-20 py-2">
            {companies.map(({id, img, name, nameImg}) => (
                <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                    <Image width={40} height={40} src={img} alt="name" className="md:w-10 w-5 h-auto" />
                    <Image width={96} height={40} src={nameImg} alt="name" className="md:w-24 w-20 h-auto" />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
