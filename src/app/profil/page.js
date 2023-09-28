"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";

export default function page() {
  useEffect(() => {
    detailUser();
  }, []);
  const detailUser = async () => {
    const response = await axios.get("http://localhost:3001/user/1");
    console.log(response.data);
  };

  return <div>page</div>;
}
