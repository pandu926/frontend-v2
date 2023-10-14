"use client";
import React, { useState } from "react";
import Image from "next/image";
import InputLogin from "../../components/inputLogin";
import Link from "next/link";
import "../../styles/navbar.css";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function page() {
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");
  const [semester, setSemester] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");

  const router = useRouter();

  const handleClick = async () => {
    axios
      .post("https://pandusubekti.tech/auth/register", {
        nim,
        password,
        nama,
        semester,
        email,
        hp,
      })
      .then((response) => {
        // Handle respons sukses (status kode 200 OK)
        router.push("/login");
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
        <h1 className="mt-5 mb-3 font-extrabold text-lg">BUAT AKUN</h1>
      </div>
      <div className="bg-white  ">
        <div className=" flex pt-8 justify-center text-xl text-indigo-700 font-extrabold" />
        <form>
          <InputLogin
            change={(e) => setNim(e.target.value)}
            id={"NIM"}
            type={"text"}
            nama={"NIM"}
            placeholder={"masukkan NIM"}
          />
          <InputLogin
            change={(e) => setNama(e.target.value)}
            id={"nama"}
            type={"text"}
            nama={"nama"}
            placeholder={"masukkan nama lengkap"}
          />
          <InputLogin
            change={(e) => setPassword(e.target.value)}
            id={"password"}
            type={"password"}
            nama={"password"}
            placeholder={"masukkan password"}
          />
          <InputLogin
            change={(e) => setSemester(e.target.value)}
            id={"smt"}
            type={"text"}
            nama={"smt"}
            placeholder={"masukkan semester"}
          />
          <InputLogin
            change={(e) => setEmail(e.target.value)}
            id={"email"}
            type={"text"}
            nama={"email"}
            placeholder={"masukkan email"}
          />
          <InputLogin
            change={(e) => setHp(e.target.value)}
            id={"hp"}
            type={"text"}
            nama={"nomer whatsapp"}
            placeholder={"masukkan nomer whatsapp"}
          />

          <button
            onClick={handleClick}
            type="button"
            className="bg-indigo-700 w-72 h-11 mt-14 mb-10 ml-10 text-white rounded-md text-lg font-extrabold "
          >
            BUAT AKUN
          </button>
        </form>

        <div className="flex justify-center text-black font-extrabold pb-20">
          Sudah Punya Akun ?<p></p>
          <Link className="text-indigo-700 ml-1 " href="/login">
            Masuk
          </Link>
        </div>
      </div>
    </div>
  );
}
