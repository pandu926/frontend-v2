"use client";
import React, { useState } from "react";
import Seminar from "./seminar";
import Penyeminar from "./penyeminar";
import protectRoute from "@/components/protectRoute";

function page({ data }) {
  const [isOpen, setOpen] = useState(false);
  const openModal = () => {
    setOpen(!isOpen);
  };
  const closeModal = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div className="flex ml-5 mr-5 mt-10 justify-between">
        <h1
          onClick={openModal}
          className={`pl-8 w-2/5 border-b-2 border-white font-bold text-lg  ${
            isOpen ? "" : "bg-white"
          } ${isOpen ? "" : "text-indigo-700"}`}
        >
          Seminar
        </h1>
        <h1
          onClick={openModal}
          className={`text-center border-b-2 w-2/4 border-white font-bold text-lg ${
            isOpen ? "bg-white" : ""
          } ${isOpen ? "text-indigo-700" : ""}`}
        >
          Penyeminar
        </h1>
      </div>
      <div className={`mt-10 ml-5 ${isOpen ? "hidden" : ""}`}>
        <Seminar user={data.id} />
      </div>
      <div className={`mt-10 ml-5 ${isOpen ? "" : "hidden"}`}>
        <Penyeminar />
      </div>
    </>
  );
}

export default protectRoute(page);
