"use client";

import React, { useEffect } from "react";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import Link from "next/link";

export default function protectRoute(WrappedComponent) {
  const Wrapper = (props) => {
    try {
      const token = Cookies.get("access_token");
      const login = jwt.verify(token, "152633383");
      return <WrappedComponent data={login} {...props} />;
    } catch (error) {
      return (
        <>
          <div className="bg-white w-3/5 text-indigo-700 mt-20 ml-20 font-bold  ">
            <h1 className="flex justify-center pt-10 pb-20">
              Sesi Anda Telah Berakhir
            </h1>
            <Link
              className="flex justify-center mb-10 translate-x-[4rem] text-lg text-white rounded-md translate-y-[-2rem] bg-indigo-700 w-2/5 "
              href="/login"
            >
              login
            </Link>
          </div>
        </>
      );
    }
  };

  return Wrapper;
}
