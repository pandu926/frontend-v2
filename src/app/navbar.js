import React from "react";
import "../styles/navbar.css";
import Image from "next/image";
import Link from "next/link";

export default function navbar() {
  return (
    <>
      <div className="fixed bottom-0 w-full  text-white p-4">
        <div className="container pl-5 pr-5 pb-3 ">
          <ul className="flex justify-between">
            <li>
              <Link href="/">
                <Image src="/Home.svg" width={48} height={48} />
              </Link>
            </li>
            <li>
              <Link href="/riwayat">
                <Image
                  className="pt-3"
                  src="/history.svg"
                  width={45}
                  height={45}
                />
              </Link>
            </li>
            <li className="place-content-center">
              <Link href="/sertifikat">
                <Image
                  className="pt-2"
                  src="/sertif.svg"
                  width={55}
                  height={55}
                />
              </Link>
            </li>
            <li className="place-content-center">
              <Link href="/profil">
                <Image
                  className="pt-1"
                  src="/profile.svg"
                  width={38}
                  height={38}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
