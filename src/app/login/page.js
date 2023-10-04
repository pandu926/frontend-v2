"use client";
import jwt from "jsonwebtoken";
import React, { useState } from "react";
import Image from "next/image";
import InputLogin from "../../components/inputLogin";
import Link from "next/link";
import "../../styles/navbar.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    axios
      .post("http://8.219.171.65:8000/auth/login", { nim, password })
      .then((response) => {
        // Handle respons sukses (status kode 200 OK)
        const data = response.data.accessToken;
        Cookies.set("access_token", data, { expires: 7 });
        router.push("/dashboard");
      })
      .catch((error) => {
        if (error.response) {
          // Handle respons dengan kode status 400
          console.log("Error Kode Status:", error.response.status);
          console.log("Pesan Error:", error.response.data);
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
            onClick={handleLogin}
            type="button"
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
