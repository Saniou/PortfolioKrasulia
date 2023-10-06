import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import emailjs from '@emailjs/browser';

type Props = {}

export default function ContactMe({ }: Props) {

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm('service_jrt93oa', 'template_z9k83cg', form.current, 'H5yR7a6m5cPUeu1HF')
        .then(
          (result) => {
            console.log('Email sent successfully:', result.text);
          },
          (error) => {
            console.error('Email sending failed:', error.text);
          }
        );
    }
  };

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
      }} className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          I have got just what yoy need. {" "}
          <span className='decoration-[#F7AB0A]/50 underline'>
            Let&apos;s Talk.
          </span>
        </h4>

        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+380731175371 / +380682040053</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>Kyiv, Ukraine</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>krasulazr@gmail.com</p>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail}

          className='flex flex-col space-y-5 w-fit mx-auto'>

          <div className='justify-between space-x-2 '>
            <input
              className='contactInput' name='name' type='text' placeholder='Name' />
            <input
              className='contactInput' name='email' type='email' placeholder='Email' />
          </div>

          <input
            className='contactInput' name='subject' type='text' placeholder='Subject' />

          <textarea
            placeholder='Message' name='message' className='contactInput' />

          <button
            type='submit' className='bg-[#F7AB0A] py-5 rounded-md text-black font-bold text-lg'>Submit</button>

        </form>

      </div>

    </motion.div>
  )
}