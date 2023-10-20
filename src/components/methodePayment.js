import React from "react";
import { useRouter } from "next/navigation";
export default function Methode({ jenis, nama, nomor }) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/riwayat");
  };
  const kode = 1;
  return (
    <div className="w-80 h-60 relative pt-5">
      <div className="w-64 h-px left-0 top-[2px] absolute border border-black"></div>
      <div className="uppercase left-[100px] top-[15px] absolute text-black text-lg font-bold font-['Inter']">
        {jenis}
      </div>
      <div className="left-0 top-[57px] absolute text-black text-sm font-bold font-['Inter']">
        nama : {nama}
      </div>
      <div className="left-0 top-[87px] absolute text-black text-sm font-bold font-['Inter']">
        nomor : {nomor}
      </div>
      <div className="left-[170px] top-[152px] absolute text-black text-sm font-bold font-['Inter']">
        kode unik {kode}
      </div>
      <div className="left-0 top-[218px] absolute text-black text-sm font-bold font-['Inter']">
        Total Pembayaran
      </div>
      <div className="left-[199px] top-[218px] absolute text-black text-sm font-bold font-['Inter']">
        rp {30000 + kode}
      </div>

      <button
        onClick={handleClick}
        className="absolute text-white  top-[280px] w-32 h-7 bg-blue-700 rounded"
      >
        selesai
      </button>
    </div>
  );
}
