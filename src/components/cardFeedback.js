"use client";
import React, { useState } from "react";

export default function Feedback(props) {
  return (
    <div className="w-80 h-44 relative">
      <div className="w-80 h-44 left-0 top-0 absolute opacity-80 bg-white rounded-2xl shadow border border-stone-700" />
      <div className="w-7 h-7 left-[270px] top-[16px] absolute bg-indigo-700" />
      <div className="left-[81px] top-[52px] absolute text-black text-base font-extrabold font-['Inter']">
        {props.error}
      </div>
    </div>
  );
}
