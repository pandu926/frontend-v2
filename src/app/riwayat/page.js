import React from "react";
import Seminar from "./seminar";

export default function getStaticProps() {
  return (
    <div className="flex ml-5 mr-5 mt-10 justify-between">
      <h1 className="pl-14 font-bold text-lg">Seminar</h1>
      <h1 className="pr-14 font-bold text-lg">Penyeminar</h1>
      <Seminar />
    </div>
  );
}
