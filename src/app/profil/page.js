"use client";

import Menu from "@/components/menuProfile";
import Cookies from "js-cookie";

import Image from "next/image";
import protectRoute from "@/components/protectRoute";
import EditProfile from "./edit";
import { useState } from "react";
import { useRouter } from "next/navigation";

function page({ data }) {
  const [toogle, setToogle] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    setToogle(true);
  };

  const handleLogout = () => {
    Cookies.set("access_token", "mememem", { expires: 7 });
    console.log("logout");
    router.push("/login");
  };
  return (
    <>
      <div className={` mt-5 ${toogle ? "hidden" : ""}`}>
        <h1 className=" font-bold flex justify-center text-lg">Profile</h1>
        <div className="flex justify-center mt-5">
          <div className=" w-32 h-32 bg-white rounded-full" />
        </div>
        <h2 className="font-bold flex justify-center text-lg mt-5 mb-5">
          {data.nama}
        </h2>
        <div className="w-full h-[450px] bg-white ">
          <div className="w-3/4 h-8 top-5 relative left-10">
            <div className="w-3/4 h-8 left-0 top-0 absolute bg-indigo-700 rounded" />
            <div className="left-[37px] top-[5px] absolute text-white text-base font-bold">
              NIM
            </div>
            <div className="w-2/3 h-8 flex justify-center left-[115px] top-0 absolute text-red-700 bg-white rounded border border-indigo-700">
              <p className="font-extrabold pt-1 ">{data.nim}</p>
            </div>
          </div>

          <button onClick={handleClick}>
            <Menu image="edit.svg" nama="Edit Profile" />
          </button>
          <Menu image="edit.svg" nama="Tentang Kami" />
          <Menu image="edit.svg" nama="FAQ" />

          <button
            onClick={handleLogout}
            type="submit"
            className="logout flex relative top-20 mb-5 ml-16 w-60 h-8"
          >
            <Image className="pb-2" src="logout.svg" width={20} height={20} />
            <di className="  text-red-600 text-base font-bold ">keluar</di>
          </button>
        </div>
      </div>
      <div className={` ${toogle ? "" : "hidden"}`}>
        <EditProfile id={data.id} />
      </div>
    </>
  );
}

export default protectRoute(page);
