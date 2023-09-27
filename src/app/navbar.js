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
                <Image src="/Home.svg" width={35} height={35} />
                <p>Home</p>
              </Link>
            </li>
            <li>
              <a href="#">
                <Image src="/sertif.svg" width={40} height={40} />
                <p>Riwayat</p>
              </a>
            </li>
            <li className="place-content-center">
              <Link href="/sertifikat">
                <Image src="/sertif.svg" width={40} height={40} />
                <p>Sertifikat</p>
              </Link>
            </li>
            <li className="place-content-center">
              <Link href="/profil">
                <Image src="/profile.svg" width={40} height={40} />
                <p>Profile</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
