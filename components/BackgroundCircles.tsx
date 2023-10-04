import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

 function BackgroundCircles({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"]
            }}
            transition={{
                duration: 2.5
            }}
            className='relative top-16 flex justify-center items-center'>
            <div className='absolute border border-[#333333] rounded-full w-[200px] h-[200px] animate-ping mt-52' />
            <div className='absolute border border-[#333333] rounded-full w-[300px] h-[300px] mt-52' />
            <div className='absolute border border-[#333333] rounded-full w-[500px] h-[500px] mt-52' />
            <div className='absolute rounded-full border border-[#F7AB02] opacity-20 w-[650px] h-[650px] animate-ping mt-52' />
            <div className='absolute rounded-full border border-[#333333] w-[750px] h-[750px] mt-52' />
        </motion.div>
    )
}

export default BackgroundCircles