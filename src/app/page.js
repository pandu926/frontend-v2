import Image from "next/image";
import "../styles/navbar.css";
import Link from "next/link";

export default function getStaticProps() {
  return (
    <div>
      <Image
        className="mt-10 ml-10 mr-4"
        src="/presenation.svg"
        width={300}
        height={230}
      />
      <div className="flex justify-center font-extrabold  text-[1.2rem] mb-10 mt-14">
        Selamat Datang
      </div>
      <div className="font-extrabold whitespace-pre-wrap text-center text-[1rem]">
        <p className="m-0">Di Sistem Ter integarsi Berkaitan Dengan</p>
        <p className="m-0">
          <span>{`Kerja KP Prodi Teknik Informatika `}</span>
          <span className="text-[1.25rem]">{` `}</span>
        </p>
      </div>
      <div className="flex justify-center text-2xl mt-10 font-extrabold">
        Universitas Sains Al-Qur’an
      </div>

      <Link href="/dashboard">
        <div className=" mt-10 flex w-3/5 translate-x-[5rem] rounded-md justify-center bg-white text-indigo-600  h-10 font-['Inter']">
          <p className="mt-2 shadow-lg font-black ">MASUK</p>
        </div>
      </Link>
      <Link href="/auth/masuk">
        <div className=" mt-5 flex w-3/5 translate-x-[5rem] rounded-md justify-center bg-white text-indigo-600  h-10 font-['Inter']">
          <p className="mt-2 shadow-lg font-black ">BUAT AKUN</p>
        </div>
      </Link>
    </div>
  );
}
