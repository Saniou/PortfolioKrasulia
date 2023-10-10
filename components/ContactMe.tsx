import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import emailjs from '@emailjs/browser';
import Modal from './Modal';

type Props = {};

export default function ContactMe({ }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      const formData = new FormData(form.current);
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const subject = formData.get('subject') as string;
      const message = formData.get('message') as string;

      if (!name || !email || !subject || !message) {
        setIsOpen(false);
        return;
      }

      try {
        await emailjs.sendForm(
          'service_jrt93oa',
          'template_z9k83cg',
          form.current,
          'H5yR7a6m5cPUeu1HF'
        );
        console.log('Email sent successfully');
        setIsOpen(true);
      } catch (error) {
        console.error('Email sending failed:', error);
        setIsOpen(false);
      }
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
      }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-xl mt-10 font-semibold text-center '>
          I have got just what you need.{' '}
          <span className='decoration-[#F7AB0A]/50 underline'>Let&apos;s Talk.</span>
        </h4>

        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-xl'>+380731175371</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-xl'>Kyiv, Ukraine</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
            <p className='text-xl'>krasulazr@gmail.com</p>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className=' justify-between flex flex-col space-y-5 w-fit mx-auto'>
          <input className='contactInput w-[350px]' name='name' type='text' placeholder='Name' />
          <input className='contactInput ' name='email' type='email' placeholder='Email' />
          <input className='contactInput' name='subject' type='text' placeholder='Subject' />
          <textarea placeholder='Message' name='message' className='contactInput' />
          <button
            type='submit'
            className='bg-[#F7AB0A] py-5 rounded-md text-black font-bold text-lg'
          >
            Submit
          </button>
          {isOpen && <Modal setIsOpen={setIsOpen} />}
        </form>
      </div>
    </motion.div>
  );
}
