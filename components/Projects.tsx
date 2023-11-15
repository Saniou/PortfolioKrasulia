import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

export default function Projects({ }: Props) {
  const projectObjects = [
    {
      id: 1,
      title: 'Drive-App',
      description: "This project aims to recreate the atmosphere of the film and showcase technical solutions based on a fictional navigation system derived from the movie's locations",
      projectPhoto: '/5.png',
      link: 'https://drive-blush.vercel.app/'
    },
    {
      id: 2,
      title: 'Margelo-Clone',
      description: "Margelo's site was created using NextJS/Typescript using various libraries for horizontal slides such as embla and the Tailwind CSS framework",
      projectPhoto: '/2.png',
      link: 'https://next-js-margelo-clone.vercel.app/'
    },
    {
      id: 3,
      title: 'Organaizer-Sokolia',
      description: 'The project I am currently working on allows the user to create his notes or tasks with the ability to upload photos. This project was conceived as an application for Google Chrome',
      projectPhoto: '/4.png',
      link: 'https://serhiichuk.github.io/sokolia/'
    },
    {
      id: 4,
      title: 'Spotify-Clone',
      description: 'This app is a Spotify clone created with Next.js and the Spotify API. It incorporates various technologies, including Next-Auth, Recoil, and Tailwind CSS. Additionally, it offers features like song pausing and volume adjustment.',
      projectPhoto: '/1.png',
    },
    {
      id: 5,
      title: 'Rozetka-Shop + Server',
      description: 'This is my inaugural React project, featuring user authentication, product display, and documentation management. It includes functionalities for adding, editing, and deleting products, as well as support for light and dark themes.',
      projectPhoto: '/3.png',
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
                <Image src={project.projectPhoto} alt='project' width={600} height={600} className='lg:w-[600px]' />
              </motion.div>
              <div className='space-y-10 px-0 md:px-10 max-w-6xl items-center '>
                <h4 className='text-md font-semibold -mb-8 text-center items-center'>
                  <span className='decoration-[#F7AB02] underline'>Case Study {i + 1} of {projectObjects.length}:</span>
                  {' ' + project.title}
                </h4>
                <p className='opacity-70 text-md text-center items-center'>
                  {project.description}
                </p>
                {project.link ? (
                  <p className='text-[#F7AB02] font-bold text-center'>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧{' '}
                      <span className='text-blue-500 '>ClickME</span>
                    </a>
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <div className='w-full absolute top-[30%] bg-gradient-to-br from-yellow-500/30 via-red-400/40 left-0 h-[500px] -skew-y-12' />
      </motion.div>
    </>
  )
}