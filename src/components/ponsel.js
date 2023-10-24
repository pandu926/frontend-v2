"use client";
import { useEffect, useState } from "react";

export default function Ponsel() {
  useEffect(() => {
    setMobile(window.innerWidth <= 800);
  }, []);

  const [mobile, setMobile] = useState(false);
  return (
    <div
      className={`w-full text-center h-full absolute top-0 bg-red-300 z-10  ${
        mobile ? "hidden" : ""
      }`}
    >
      <h1 className="font-extrabold text-2xl uppercase pt-24 text-black">
        halaman hanya tersedia di perangkat mobile
      </h1>
    </div>
  );
}
