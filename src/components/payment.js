"use client";
import { useState } from "react";
import Methode from "./methodePayment";

export default function Payment() {
  const methodePayment = ["dana", "bri", "qris"];
  const [status, setStatus] = useState("");

  const handleOptionChange = (event) => {
    setStatus(event.target.value);
    console.log(status);
  };
  return (
    <div>
      <h1 className="text-center">Pendaftaran Berhasil</h1>
      <h2 className="pl-7 pt-10">Pilih Metode Pembayaran</h2>
      <div className="pl-20 pt-3 uppercase space-y-2">
        {methodePayment.map((seminar) => (
          <label key={seminar} className="block">
            <input
              type="radio"
              name="choice"
              value={seminar}
              checked={status == seminar}
              onChange={handleOptionChange}
            />
            {seminar}
          </label>
        ))}
      </div>
      <div className={`pl-10 ${status ? "" : "hidden"}`}>
        {status == "dana" ? (
          <Methode jenis={status} nomor="081326363636" nama="ahmad pandu" />
        ) : status == "bri" ? (
          <Methode jenis={status} nomor="081326363636" nama="ahmad pandu" />
        ) : (
          <p>
            <Methode jenis={status} nomor="081326363636" nama="ahmad pandu" />
          </p>
        )}
      </div>
    </div>
  );
}
