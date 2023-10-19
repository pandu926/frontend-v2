"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Pengumuman() {
  useEffect(() => {
    dataPengumuman();
  }, []);
  const [data, setData] = useState([]);

  const dataPengumuman = async () => {
    axios
      .get("https://pandusubekti.tech/pengumuman/list")
      .then((response) => {
        // Handle respons sukses (status kode 200 OK)
        const data = response.data;
        setData(data);
      })
      .catch((error) => {
        if (error.response) {
          // Handle respons dengan kode status 400
          console.log("Error Kode Status:", error.response.status);
        } else if (error.request) {
          // Handle kesalahan permintaan (misalnya, tidak ada respons dari server)
          console.log("Tidak Ada Respons:", error.request);
        } else {
          // Handle kesalahan lainnya
          console.log("Error Lainnya:", error.message);
        }
      });
  };
  return (
    <div>
      <div
        id="default-carousel"
        className="relative w-full h-32"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}

        <div className="relative  h-32 overflow-hidden rounded-lg ">
          {data.map((pengumuman) => (
            <div className="p-4">
              <div
                className="flex justify-center  relative h-24 md:h-24 overflow-hidden rounded-lg"
                style={{ background: "white" }}
              >
                <h3 className="text-base text-sm font-semibold text-indigo-700 pl-14 pt-2 pr-12">
                  {pengumuman.judul}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Slider indicators */}
        <div className="absolute z-304flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to={0}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to={1}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to={2}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to={3}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to={4}
          />
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev=""
        >
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-indigo-700 dark:bg-gray-800/30 group-hover:bg-red-700 ">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next=""
        >
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-indigo-700 dark:bg-gray-800/30 group-hover:bg-red-500">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}
