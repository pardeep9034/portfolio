import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div
      className="bg-grid-black/[0.70]
     min-h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Hi, I'm Pardeep
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          A passionate{" "}
          <span className="text-blue-300 font-semibold">
            Full-Stack Developer
          </span>
          , crafting clean, modern, and responsive web applications using
          cutting-edge technologies.
        </p>
        <div className="text-neutral-300 mt-6">
          <a
            href="#"
            // download="Pardeep_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              borderRadius="1.9rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-red-500 dark:border-slate-800 font-bold"
            >
              Get My CV
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
