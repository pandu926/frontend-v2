"use client";
import { useEffect } from "react";
import Tambah from "../../components/tambah";
import Head from "next/head";
import "../../styles/seminar.css";

export default function page() {
  useEffect(() => {
    if (window.innerWidth >= 768) {
      alert("website tidak bekerja pada dekstop gunakan smartphone anda");
    }
  }, []);
  return (
    <>
      <div className="header m-3">
        <div className="flex justify-content: space-between; ">
          <div className="w-1/6  p-4"></div>
          <div className="w-full  p-4">halo, Ahmad Pandu</div>
          <div className="w-1/6  p-4"></div>
        </div>
      </div>

      <div className="pengumuman ml-5 mt-10 mr-5">
        <h4 className="mb-8">Pengumuman</h4>
        <div className="w-full h-24 bg-white p-4">halo, Ahmad Pandu</div>
      </div>
      <div className="seminar ml-5 mt-10 mr-5">
        <h4 className="mb-8">Daftar Seminar KP</h4>
        <div className="w-3/4 ml-10 h-24 bg-white rounded-lg p-4 shadow-lg items-center ">
          <p className="ml-4 font-bold text-black">Seminar KP Gelombang 24</p>
          <Tambah />
        </div>
      </div>
    </>
  );
}