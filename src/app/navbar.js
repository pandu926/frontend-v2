import React from "react";

import Image from "next/image";
import Link from "next/link";

export default function navbar() {
  return (
    <div className="navbar">
      <div className="fixed bottom-0 h-16 w-full z-50 bg-indigo-500 text-white p-4">
        <div className="container pl-5 pr-5 translate-y-[-1rem] ">
          <ul className="flex justify-between">
            <li>
              <Link href="/dashboard">
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
                  className="pt-2"
                  src="/profile.svg"
                  width={38}
                  height={38}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
