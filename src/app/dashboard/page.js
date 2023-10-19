"use client";
import { useEffect, useState } from "react";
import Tambah from "../../components/tambah";
import "../../styles/seminar.css";
import axios from "axios";
import Pengumuman from "./pengumuman";
import protectRoute from "@/components/protectRoute";

function page({ data }) {
  useEffect(() => {
    dataSeminar();
  }, []);
  const [seminar, setSeminar] = useState("");

  const dataSeminar = async () => {
    axios
      .get("https://pandusubekti.tech/seminar/latest")
      .then((response) => {
        // Handle respons sukses (status kode 200 OK)
        const data = response.data;
        setSeminar(data);
      })
      .catch((error) => {
        if (error.response) {
          // Handle respons dengan kode status 400
          console.log("Error Kode Status:", error.response.status);
          const data = {
            nama: "belum ada",
          };
          setSeminar(data);
        } else if (error.request) {
          // Handle kesalahan permintaan (misalnya, tidak ada respons dari server)
          console.log("Tidak Ada Respons:", error.request);
        } else {
          // Handle kesalahan lainnya
          console.log("Error Lainnya:", error.message);
        }
      });
  };

  return (
    <div>
      <div className="header m-3">
        <div className="flex justify-content: space-between; ">
          <div className="w-1/6  p-4"></div>
          <div className="w-full  p-4">halo, {data.nama}</div>
          <div className="w-1/6  p-4"></div>
        </div>
      </div>

      <div className="pengumuman ml-5 mt-10 mr-5">
        <h4 className="mb-8">Pengumuman</h4>
        <Pengumuman />
      </div>
      <div className="seminar ml-5 mt-10 mr-5">
        <h4 className="mb-8">Daftar Seminar KP</h4>
        <div className="w-3/4 ml-10 h-24 bg-white rounded-lg p-4 shadow-lg items-center ">
          <p className="ml-4 font-bold text-black">{seminar.nama}</p>
          <Tambah seminar={seminar} user={data.id} />
        </div>
      </div>
    </div>
  );
}

export default protectRoute(page);
