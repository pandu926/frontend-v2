"use client";

import React, { useEffect } from "react";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";

export default function protectRoute(WrappedComponent) {
  const Wrapper = (props) => {
    const router = useRouter();
    useEffect(() => {
      // Ambil token JWT dari cookie
      const token = Cookies.get("access_token");

      // Pastikan token ada sebelum mencoba verifikasi
      if (token) {
        try {
          // Verifikasi token JWT
          const login = jwt.verify(token, "1526333838");
          return <WrappedComponent data={login} {...props} />;
        } catch (error) {
          // Tangani kesalahan jika token tidak valid
          console.error("Error verifying JWT:", error);

          // Redirect ke halaman login jika token tidak valid
          router.push("/login");
        }
      }
    }, []);
  };

  return Wrapper;
}