"use client";
import React, { useState } from "react";
import Image from "next/image";
import InputLogin from "../../components/inputLogin";
import Link from "next/link";
import "../../styles/navbar.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function page() {
  const [message, setMessege] = useState("");
  const [toogle, setToogle] = useState(false);
  const [color, setColor] = useState("");

  const router = useRouter();

  const schema = yup.object().shape({
    nim: yup.string().required("Nim tidak boleh kosong"),

    password: yup
      .string()
      .required("password tidak boleh kosong")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-zA-Z0-9]).{8}$/,
        "Password harus memiliki minimal 1 huruf besar, 1 huruf kecil, 1 angka, dan panjang 8 karakter."
      ),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const { nim, password, nama, semester, email, hp } = data;
    try {
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
          setMessege("pendaftaran sukses , mengalihkan ke login");
          setToogle(true);
          setColor("text-green-500");
          setMessege("pendaftaran sukses , mengalihkan ke login");
          router.push("/login");
        })
        .catch((error) => {
          if (error.response) {
            // Handle respons dengan kode status 400
            setToogle(true);
            setColor("text-red-500");
            setMessege("NIM sudah terdaftar");
          } else if (error.request) {
            // Handle kesalahan permintaan (misalnya, tidak ada respons dari server)
            console.log("Tidak Ada Respons:", error.request);
          } else {
            // Handle kesalahan lainnya
            console.log("Error Lainnya:", error.message);
          }
        });
    } catch (err) {
      console.log(err);
    }
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
        <h1
          className={`flex capitalize pt-8 justify-center text-lg ${color} ${
            toogle ? "" : "hidden"
          } `}
        >
          {message}
        </h1>
        <div className=" flex pt-8 justify-center text-xl text-indigo-700 font-extrabold" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputLogin
            name="nim"
            label="NIM"
            control={control}
            rules={{ required: "NIM tidak boleh kosong" }}
          />
          {errors.nim && (
            <p className="pl-10 text-red-500">{errors.nim.message}</p>
          )}

          <InputLogin
            name="nama"
            label="nama"
            control={control}
            rules={{ required: "Nama tidak boleh kosong" }}
          />
          {errors.nama && (
            <p className="pl-10 text-red-500">{errors.nama.message}</p>
          )}

          <InputLogin
            name="password"
            label="password"
            control={control}
            rules={{ required: "password tidak boleh kosong" }}
            type="password"
          />
          {errors.password && (
            <p className="pl-10 text-red-500">{errors.password.message}</p>
          )}

          <InputLogin
            name="semester"
            label="semester"
            control={control}
            rules={{ required: "semester tidak boleh kosong" }}
            type="text"
          />
          {errors.semester && (
            <p className="pl-10 text-red-500">{errors.semester.message}</p>
          )}

          <InputLogin
            name="email"
            label="email"
            control={control}
            rules={{ required: "email tidak boleh kosong" }}
            type="text"
          />
          {errors.email && (
            <p className="pl-10 text-red-500">{errors.email.message}</p>
          )}

          <InputLogin
            name="hp"
            label="nomer wa"
            control={control}
            rules={{ required: "nomer wa tidak boleh kosong" }}
            type="text"
          />
          {errors.hp && (
            <p className="pl-10 text-red-500">{errors.hp.message}</p>
          )}

          <button
            type="submit"
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
