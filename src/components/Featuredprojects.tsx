'use client';
import React from 'react'
import projectData from"@/data/portfolio.json"
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient';
import Image from 'next/image';
const Featuredprojects = () => {
const projects = projectData.project;
  return (
    <div className="text-white py-16 bg-gray-900 bg-grid-black/[0.70]">
     <div><div className="text-center">
        <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured projects</h2>
        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with Best</p></div></div>
     <div className='mt-10 p-4'>
        <div className=' grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center  '>
            {projects.map((project, index) => (
                <div key={index} className='flex justify-center'>
                    <BackgroundGradient className='flex flex-col rounded-[20px] bg-white dark:bg-zinc-900 overflow-hedden h-full max-w-sm justify-center items-center'>
                        <Image src={project.image} alt={project.name} className='rounded-t-[20px]  object-contain' width={400} height={250} />
                        <div className=' p-4 sm:p-6 flex flex-col text-centre flex-grow text-justify'>
                            <h3 className='text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{project.name}</h3>
                            <p className='text-sm text-neutral-600 dark:text-neutral-400'>{project.description}</p>
                            <div className='mt-4  items-center justify-center flex flex-col sm:flex-row'>
                                <Link href={project.url} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
                                    View project
                                </Link>
                            </div>
                        </div>
                       
                    </BackgroundGradient>
                    </div>
            ))}

        

        </div>
     </div>
     <div className='mt-20 text-center'>
        <Link href="/projects" className='px-4 py-2 rounded boder border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transitoin duration-200'>
            View all projects
        </Link>
     </div>
    </div>
  ) 
}

export default Featuredprojects
