import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="bg-black/[.9] text-white min-h-screen bg-grid-black/[0.70]">
      {/* Hero Section */}
      <div className=" min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <div className="p-4 z-10 w-full text-center">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            About Me
          </h1>
          <p className="mt-4 font-normal text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            Learn more about my journey, skills, and passions.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/2">
            <Image
              src="/profile.jpg" // Replace with your profile image
              alt="My Profile"
              width={350}
              height={350}
              className="rounded-full object-cover shadow-lg"
            />
          </div>

          {/* About Details */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-white">
              Hi, I'm Pardeep!
            </h2>
            <p className="mt-4 text-neutral-400 leading-relaxed">
              I'm a passionate Software Developer and Web Developer, eager to
              explore and create modern, scalable web solutions. With a knack
              for understanding how things work, I thrive on solving complex
              problems and delivering intuitive user experiences.
            </p>

            <p className="mt-4 text-neutral-400 leading-relaxed">
              My journey in technology began with curiosity, leading me to
              develop projects like a College Bus Management System, a
              Zerodha-inspired trading platform clone, and a Vegetable Store
              Management System. I specialize in full-stack development, with
              expertise in React, Node.js, Express, and MongoDB.
            </p>

            {/* Skills */}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-white">Skills</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "JavaScript",
                  "React",
                  "Node.js",
                  "MongoDB",
                  "Express",
                  "Tailwind CSS",
                  "Git",
                  "GitHub",
                  "basic Next.js",
                ].map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-neutral-500 bg-neutral-700 rounded-full px-3 py-1 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            

            {/* Contact */}
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>
              <p className="mt-4 text-neutral-400">
                I'd love to hear from you! Whether it's about a project,
                collaboration, or just to say hi, feel free to reach out.
              </p>
              <div className="mt-4">
                <Link
                  href="mailto:dk5192966@gmail.com"
                  className="text-blue-500 hover:text-blue-400 font-medium text-lg transition duration-300"
                >
                  dk5192966@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
