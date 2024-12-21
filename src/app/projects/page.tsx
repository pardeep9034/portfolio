import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight"; // Reuse Spotlight for consistency

const projects = [
  {
    title: "Freshly",
    description:
      "A vegetable store management system. Manage stocks, update prices, and handle customer orders seamlessly.",
    image: "/project1.png",
    link: "https://freshly-eight.vercel.app",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Tranzy",
    description:
      "A college bus management system. Manage bus routes, track student registrations, and issue bus passes dynamically.",
    image: "/project2.png",
    link: "https://bus-ecru.vercel.app/",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Wonderlust",
    description:
      "A travel places management system. Explore and book travel destinations with an integrated map and booking system.",
    image: "/project3.png",
    link: "https://wonderlust-react.vercel.app/",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Zerodha Clone",
    description:
      "Learning frontend using React. A clone of the Zerodha trading platform focusing on user interface design and functionality.",
    image: "/project4.png",
    link: "https://zerodha-kappa.vercel.app",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
];

const ProjectPage = () => {
  return (
    <div className="bg-black/[.7] text-white bg-grid-black/[0.70] ">
      {/* Hero Section */}
      <div className="bg-grid-black/[0.70]   min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto md:py-0">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <div className="p-4 z-10 w-full text-center">
          <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>
            My Projects
          </h1>
          <p className="mt-4 font-normal text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            Explore some of my best works that showcase my skills in building modern, scalable web applications.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className=" grid gap-5 ">
      {projects.map((project, index) => (
        <div
          key={index}
          className="  py-10 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 bg-black/[.70] rounded-xl shadow-lg "
        >
          {/* Project Image */}
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="rounded-xl object-fit w-full h-[300px] shadow-lg"
            />
          </div>

          {/* Project Details */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-white">{project.title}</h2>
            <p className="mt-4 text-neutral-400">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href={project.link}
                className="inline-block text-blue-500 hover:text-blue-400 font-medium text-lg transition duration-300"
              >
                Visit Site
              </Link>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs text-neutral-500 bg-neutral-700 rounded-full px-3 py-1 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      ))}
      </div>
    </div>
  );
};

export default ProjectPage;
