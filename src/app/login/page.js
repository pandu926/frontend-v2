"use client";
import React, { useState } from "react";
import Image from "next/image";
import InputLogin from "../../components/inputLogin";
import Link from "next/link";

export default function page() {
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="ml-10 mt-5">
        <Link href="/">
          <Image src="/back.svg" width={40} height={40} />
        </Link>
        <h1 className="mt-5 mb-3 font-extrabold text-lg">MASUK</h1>
      </div>
      <div className="bg-white  ">
        <h1 className=" flex pt-8 justify-center text-xl text-indigo-700 font-extrabold">
          Selamat Datang Kembali
        </h1>
        <form>
          <InputLogin
            change={(e) => setNim(e.target.value)}
            tinggi={"mt-10"}
            id={"NIM"}
            type={"text"}
            nama={"NIM"}
            placeholder={"masukkan NIM"}
          />
          <InputLogin
            change={(e) => setPassword(e.target.value)}
            tinggi={"mt-10"}
            id={"password"}
            type={"password"}
            nama={"Password"}
            placeholder={"masukkan password"}
          />
          <button
            type="submit"
            className="bg-indigo-700 w-72 h-11 mt-14 mb-10 ml-10 text-white rounded-md text-lg font-extrabold "
          >
            MASUK
          </button>
        </form>

        <div className="flex justify-center text-black font-extrabold pb-20">
          Belum Punya Akun ?<p></p>
          <Link className="text-indigo-700 ml-1 " href="/register">
            Buat Akun
          </Link>
        </div>
      </div>
    </div>
  );
}
