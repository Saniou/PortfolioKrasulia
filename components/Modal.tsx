import React from "react";

const Modal = ({ setIsOpen }) => {
  return (
<>
  <div className="fixed inset-0 z-0 bg-black bg-opacity-20" onClick={() => setIsOpen(false)} />
  <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
    <div className="bg-white text-gray-800 rounded-lg shadow-md">
      <div className="bg-white rounded-t-lg overflow-hidden">
        <h5 className="text-center font-semibold text-2xl p-4">Dialog</h5>
      </div>
      <div className="p-4 text-center">
        Are you sure you want to delete the item?
      </div>
      <div className="p-4 text-center">
        <div className="flex justify-center space-x-4">
        </div>
      </div>
    </div>
  </div>
</>
  );
};

export default Modal;