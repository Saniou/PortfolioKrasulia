import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

export default function Projects({ }: Props) {
  const projectObjects = [
    {
      id: 1,
      title: 'Spotify-Clone',
      description: 'This app is a clone of the popular Spotify app built entirely using NextJS and the SpotifyAPI. Also used such technologies as: mui, bootstrap, lodash, next-auth, recoil and tailwindCSS. Also created the ability to pause a song on the player and change the volume.',
      projectPhoto: '/1.png'
    },
    {
      id: 2,
      title: 'Margelo-Clone',
      description: "Margelo's site was created using NextJS/Typescript using various libraries for horizontal slides such as embla and the Tailwind CSS framework",
      projectPhoto: '/2.png'
    },
    {
      id: 3,
      title: 'Rozetka-Shop + Server',
      description: 'This is my first project written in React, a server was also written for it to authorize the user, display products and enter their product documentation with the ability to add, edit and delete. He was also able to implement the possibility of changing the light and dark version of the site',
      projectPhoto: '/3.png'
    },
    {
      id: 4,
      title: 'Organaizer-Sokolia',
      description: 'The project I am currently working on allows the user to create his notes or tasks with the ability to upload photos. This project was conceived as an application for Google Chrome',
      projectPhoto: '/4.png'
    },
  ]
  return (
    <>
      <motion.div
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1
        }}
        transition={{
          duration: 1.7,
        }} className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
          Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
          {projectObjects.map((project, i) => (
            <>
              <div key={project.id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>

                <motion.div
                initial={{
                  y: -300,
                  opacity: 0
                }}
                whileInView={{
                  y: 0,
                  opacity: 1
                }}
                transition={{
                  duration: 1.2,
                }}>
                  <Image src={project.projectPhoto} alt='project' width={800} height={800} />
                </motion.div>
                <div className='space-y-10 px-0 md:px-10 max-w-6xl '>
                  <h4 className='text-4xl font-semibold text-center'>
                    <span className='decoration-[#F7AB02] underline'>Case Study {i + 1} of {projectObjects.length}:</span>
                    {' ' + project.title}
                  </h4>
                  <p className='opacity-70 text-lg text-center md:text-left'>
                    {project.description}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>

        <div className='w-full absolute top-[30%] bg-gradient-to-br from-yellow-500/30 via-red-400/40 left-0 h-[500px] -skew-y-12' />
      </motion.div>
    </>
  )
}