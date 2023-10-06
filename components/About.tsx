import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({ }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1.7,
      }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{
          once: true,
        }}
        className='-mb-20 md:mb-0 flex-shrink-0 w-[170px] h-[170px] rounded-full md:rounded-lg md:w-[250px] md:h-[250px] xl:w-[300px] xl:h-[300px]'
        src='/stickerAbout.png' alt='about-image' />

      <div className='space-y-5 px-0 md:px-10'>
        <h4 className=' text-center text-xl lg:text-4xl sm:text-4xl font-semibold md:text-2xl '>
          Here is a{" "}
          <span className='underline decoration-[#F7AB0A]'>
            little
          </span>{" "}background
        </h4>
        <p className='text-gray-400 text-center text-sm lg:text-[16px] md:text-sm sm:text-sm'>
          My name is Oleksandr! 💯<br />

          I&apos;m a front-end developer with 1 year of experience.<br />

          I actively use various libraries and frameworks like Material-UI (MUI), DaisyUI, Tremor, Versel, NextAuth, Quill, Shadcn, Motion Framer, and HeroIconic.<br />
          My professional journey was enriched by my education at Hillel IT-school, where I gained essential skills for building high-quality web applications.✨<br />
          Over the past year, I&apos;ve successfully completed several projects I&apos;m proud of. One is a music app utilizing the Spotify API for music streaming. Another is a small online shop with user registration and login functionality. I&apos;ve also created a clone of the Margelo website, showcasing various animations to highlight my animation skills.<br />

          Currently, I&#39;m focused on a real startup project — an extension for the Google Chrome browser serving as a planner and event organizer.🚀<br />

          Thank you for your attention and the opportunity to share my experiences and achievements. 😊❤️
        </p>
      </div>

    </motion.div>
  )
}