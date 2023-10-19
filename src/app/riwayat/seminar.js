import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Seminar(props) {
  const id = props.user;
  const [seminarData, setSeminarData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    axios
      .get(`https://pandusubekti.tech/daftarseminar/peserta?id=${id}`)
      .then((response) => {
        setSeminarData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="text-white">
      <div className="flex ml-10 pt-5 pb-5 font-extrabold text-lg">
        <h1>Riwayat Pendaftaran seminar</h1>
      </div>
      {seminarData.map((seminar, index) => (
        <div
          key={index}
          className="edit relative top-14 mb-5 ml-4 w-72 h-8 flex border-b-2 border-white"
        >
          <div className="text-base font-bold pr-10 ">{index + 1}. </div>
          <div className="text-base font-bold ">{seminar.seminar.nama}</div>
        </div>
      ))}
    </div>
  );
}
