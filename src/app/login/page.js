"use client";
import React, { useState } from "react";
import Image from "next/image";
import InputLogin from "../../components/inputLogin";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "../../styles/navbar.css";

export default function Login() {
  const router = useRouter();

  const [message, setMessege] = useState("");
  const [toogle, setToogle] = useState(false);
  const [color, setColor] = useState("");

  //validasi schema
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
    const { nim, password } = data;
    try {
      axios
        .post("https://pandusubekti.tech/auth/login", { nim, password })
        .then((response) => {
          // Handle respons sukses (status kode 200 OK)
          setToogle(true);
          setColor("text-green-500");
          setMessege("login sukses , mengalihkan ke dashboard");
          const data = response.data.accessToken;
          Cookies.set("access_token", data, { expires: 7 });
          router.push("/dashboard");
        })
        .catch((error) => {
          if (error.response) {
            // Handle respons dengan kode status 400
            setToogle(true);
            setColor("text-red-500");
            if (error.response.status == 404) {
              return setMessege("pengguna tidak ada");
            }
            setMessege("kata sandi salah");
          } else if (error.request) {
            // Handle kesalahan permintaan (misalnya, tidak ada respons dari server)
            console.log("Tidak Ada Respons:", error.request);
          } else {
            // Handle kesalahan lainnya
            console.log("Error Lainnya:", error.message);
          }
        });
    } catch (error) {
      console.log(error);
    }
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

        <h1
          className={`flex capitalize pt-8 justify-center text-lg ${color} ${
            toogle ? "" : "hidden"
          } `}
        >
          {message}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputLogin
            tinggi="pt-10"
            name="nim"
            label="NIM"
            control={control}
            rules={{ required: "NIM tidak boleh kosong" }}
          />
          {errors.nim && (
            <p className="pl-10 text-red-500">{errors.nim.message}</p>
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
