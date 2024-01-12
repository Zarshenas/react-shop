import React, { useState } from "react";

function Modal({ title, description, hint }) {
  const [showModal, setShowModal] = useState(true);
  return (
    showModal && (
      <div className="z-10 fixed w-screen h-screen backdrop-blur-md top-0 left-0">
        <div className="mx-auto mt-[20vh] w-10/12 h-max bg-grayshade-500 shadow-lg rounded-md p-4 lg:p-16 bg-clip-padding border border-purpleshade-400 ">
          <h1 className="text-lg lg:text-4xl mb-10">{title}</h1>
          <p className="text-grayshade-50 text-sm lg:text-xl mb-10">
            {description}
            <span className="text-purpleshade-400">{hint}</span>
          </p>
          <button
            onClick={() => setShowModal(false)}
            className="button py-2 px-8 text-right"
          >
            Ok
          </button>
        </div>
      </div>
    )
  );
}

export default Modal;
