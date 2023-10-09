import React from "react";
import Image from "next/image";

interface ModalProps {
  setIsOpen: (isOpen: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ setIsOpen }) => {
  return (
    <>
      <div className="fixed inset-0 z-0 bg-black bg-opacity-20" onClick={() => setIsOpen(false)} />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] z-10 ">
        <div className="bg-white shadow-lg shadow-green-500 text-gray-800 rounded-lg">
          <div className="p-4 text-center flex flex-col items-center justify-center">
            <Image src='/icons8-submit-64.png' width={100} height={100} alt='submit form' />
            <h1 className="text-2xl mb-5">😎Thank You😎</h1>
            <p>Your submission has been received. We will be in touch and contact you soon!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;