import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

export default function Hero({ }: Props) {
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative z-50 top-20'>
            <BackgroundCircles />
            <Image className='relative h-[250px] w-[250px] object-cover rounded-full' width={200} height={200} src='/sticker.png' alt='Avatar' />

            <h2 className=' relative z-50 tracking-[15px] text-gray-300 uppercase'>Front-End Developer</h2>

            <h1 className='text-4xl lg:text-6xl font-semibold px-10 relative z-50'>
                <Typewriter
                    words={['Olexandr Krasulia', '{Sanio}', '<TheGuyWhoLovesCoffee/>', 'Dreamer.tsx']}
                    loop={true}
                    cursor
                    cursorStyle='●'
                    cursorColor='#F7AB04'
                    delaySpeed={2000}
                />
            </h1>
            <div className='relative z-50'>
                <Link href="#about">
                    <button className='heroButtons'>About</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButtons'>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButtons'>Skills</button>
                </Link>
                <Link href="#project">
                    <button className='heroButtons'>Project</button>
                </Link>
            </div>
        </div>
    )
}