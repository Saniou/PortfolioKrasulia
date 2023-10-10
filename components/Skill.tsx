import React from 'react';
import { motion } from 'framer-motion';

type SkillProps = {
  directionLeft?: boolean;
  images: string[];
  progress: string;
};

function Skill({ directionLeft, images, progress }: SkillProps) {
  return (
    <div className='group relative flex cursor-pointer'>
      {images.map((image, index) => (
        <motion.img
          key={index}
          initial={{
            x: directionLeft ? -100 : 100,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          src={image}
          alt={`Skill ${index}`}
          className='rounded-full border border-gray-500 object-cover w-14 md:w-20 xl:w-32 h-14 md:h-20 xl:h-32 p-2 md:p-3 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
      ))}
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-14 md:h-[75px] xl:h-32 w-14 md:w-[75px] xl:w-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-lg md:text-3xl font-bold text-black opacity-100'>{progress}</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;