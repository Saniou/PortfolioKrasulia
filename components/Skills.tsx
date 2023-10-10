import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { skillData } from '@/data/skillData'

type Props = {}

export default function Skills({ }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 2.5
      }}
      className='h-screen flex flex-col relative text-center md:text-center sm:text-center xl:flex-row max-w-[2000px] xl:px-10 justify-center min-h-screen xl:space-y-0 mx-auto items-center'>
      <h3
        className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>
      <h3
        className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill to find out the level
      </h3>

      <div className='grid grid-cols-4 gap-5'>
        {skillData.map((skill, index) => (
          <Skill key={index} progress={skill.level} images={skill.imageUrl} />
        ))}
      </div>

    </motion.div>
  )
}