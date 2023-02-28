import React from "react";
import picture from "../../assets/formal-image.png";

const Welcome = () => {
  return (
    <>
      <div className="herosection relative overflow-hidden">
        <div className="herosection-content relative z-20 bg-grey-darken  bg-opacity-20">
          <div className="container relative mx-auto">
            <div className="flex min-h-screen w-full items-center justify-center">
              <div className="herosection-content w-full py-20 text-center md:w-3/4">
                <div className="herosection-imagewrapper relative mb-5 inline-block overflow-hidden rounded-full align-middle">
                  <span className="herosection-imageanimation absolute left-0 top-0 z-10 h-full w-full animate-spin rounded-full bg-gradient-to-tr from-primary to-transparent"></span>
                  <div className="herosection-image fiximage relative z-20 inline-block h-[150px] w-[150px] overflow-hidden rounded-full border-6 border-primary border-opacity-10 align-middle">
                    <span className="Welcome-image-inner-span">
                      <span className="Welcome-image-inner-span-inside"></span>
                      <img
                        alt="Alvaro R Martin"
                        src={picture}
                        decoding="async"
                        data-nimg="responsive"
                        className="Welcome-picture"
                      ></img>
                      <noscript></noscript>
                    </span>
                  </div>
                </div>
                <h1 className="mb-5 text-heading Welcome-Wrappwer">
                  <span className="block sm:inline">Hi, I am</span>
                  <span className="text-primary">
                    <span> Joseph B</span>
                    <span className="typed-cursor">|</span>
                  </span>
                </h1>
                <p className="lead mb-0 block Welcome-Wrappwer">
                  I am a full stack software developer. I can provide clean code and
                  pixel perfect design. I also make website more &amp; more
                  interactive with web animations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
