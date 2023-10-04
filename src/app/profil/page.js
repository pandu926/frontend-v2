"use client";
import { useEffect, useState } from "react";
import Menu from "@/components/menuProfile";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import Image from "next/image";

export default function page() {
  useEffect(() => {
    if (window.innerWidth >= 768) {
      alert("website tidak bekerja pada dekstop gunakan smartphone anda");
    }
    DataUser();
  }, []);
  const [user, setUser] = useState("");
  function DataUser() {
    const token = Cookies.get("access_token");
    console.log(typeof token);
    const data = jwt.verify(token, "1526333838");
    setUser(data);
  }
  return (
    <div className=" mt-5">
      <h1 className="font-bold flex justify-center text-lg">Profile</h1>
      <div className="flex justify-center mt-5">
        <div className=" w-32 h-32 bg-white rounded-full" />
      </div>
      <h2 className="font-bold flex justify-center text-lg mt-5 mb-5">
        {user.nama}
      </h2>
      <div className="w-full h-[450px] bg-white ">
        <div className="w-3/4 h-8 top-5 relative left-10">
          <div className="w-3/4 h-8 left-0 top-0 absolute bg-indigo-700 rounded" />
          <div className="left-[37px] top-[5px] absolute text-white text-base font-bold">
            NIM
          </div>
          <div className="w-2/3 h-8 flex justify-center font-extrabold  left-[115px] top-0 absolute text-red-700 bg-white rounded border border-indigo-700">
            {user.nim}
          </div>
        </div>

        <Menu link="/profile/edit" image="edit.svg" nama="Edit Profile" />
        <Menu link="/profile/edit" image="edit.svg" nama="Tentang Kami" />
        <Menu link="/profile/edit" image="edit.svg" nama="FAQ" />

        <div className="logout flex relative top-20 mb-5 ml-16 w-60 h-8">
          <Image className="pb-2" src="logout.svg" width={40} height={40} />
          <div className="  text-red-600 text-base font-bold ">keluar</div>
        </div>
      </div>
    </div>
  );
}
