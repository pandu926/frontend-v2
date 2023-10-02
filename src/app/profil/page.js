import React from "react";
import Menu from "@/components/menuProfile";
import Image from "next/image";

export default function page() {
  return (
    <div className=" mt-5">
      <h1 className="font-bold flex justify-center text-lg">Profile</h1>
      <div className="flex justify-center mt-5">
        <div className=" w-32 h-32 bg-white rounded-full" />
      </div>
      <h2 className="font-bold flex justify-center text-lg mt-5 mb-5">
        Ahmad Pandu Subekti
      </h2>
      <div className="w-full h-[450px] bg-white ">
        {/* <div className="top-4 h-8 rounded-md w-3/4 translate-x-[3rem] relative nim bg-indigo-700">
          <div className="bg-white h-[] w-2/3 absolute  translate-y-[3px] translate-x-[90px]"></div>
        </div> */}
        <div className="w-3/4 h-8 top-5 relative left-10">
          <div className="w-3/4 h-8 left-0 top-0 absolute bg-indigo-700 rounded" />
          <div className="left-[37px] top-[5px] absolute text-white text-base font-bold">
            NIM
          </div>
          <div className="w-2/3 h-8 left-[115px] top-0 absolute bg-white rounded border border-indigo-700" />
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
