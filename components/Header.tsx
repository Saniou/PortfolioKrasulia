import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex justify-between items-start max-w-7xl mx-auto z-[500] xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 0.5
                }}
                className='flex flex-row items-center'>
                <SocialIcon
                    network="facebook"
                    url='https://www.facebook.com/profile.php?id=100089028230021'
                    bgColor="transparent"
                    fgColor="#817d81"
                />
                <SocialIcon
                    network="linkedin"
                    url='https://www.linkedin.com/in/olexander-krasulia-87a5971aa/'
                    bgColor="transparent"
                    fgColor="#817d81"
                />
                <SocialIcon
                    network="sharethis"
                    url=''
                    bgColor="transparent"
                    fgColor="#817d81"
                />
                <SocialIcon
                    network="instagram"
                    url='https://www.instagram.com/krasunchick'
                    bgColor="transparent"
                    fgColor="#817d81"
                />
                <SocialIcon
                    network="x"
                    url='https://twitter.com/DONDO_CHACKA'
                    bgColor="transparent"
                    fgColor="#817d81"
                />
            </motion.div>
            <motion.div
                initial={{
                    y: 500,
                    opacity: 0,
                    scale: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 0.5
                }}
                className='flex flex-row items-center cursor-pointer'>
                <SocialIcon
                    network="email"
                    url=''
                    bgColor="transparent"
                    fgColor="#817d81"
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
            </motion.div>
        </header>
    )
}