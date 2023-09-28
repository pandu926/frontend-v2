"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Seminar() {
  useEffect(() => {
    getData();
  }, []);
  const [data, setData] = useState();

  const getData = async () => {
    const respone = await axios.get("http://localhost:3001/peserta/1");
    console.log(respone.data);
    if (!respone.data) {
      return "data tidak ada";
    }
    const getSeminar = respone.data.seminarid;
    const respon = await axios.get(
      `http://localhost:3001/seminar/${getSeminar}`
    );
    console.log(respon.data);
  };

  return <div>seminar</div>;
}
