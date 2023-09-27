"use client";
import React, { useState, useEffect } from "react";
import Tambah from "./tambah";
import PendaftaranSeminar from "./pendaftaranSeminar";
import "../../asset/css/seminar.css";

export default function page() {
  useEffect(() => {
    getData();
  }, []);

  const [seminar, setSeminar] = useState();
  const [active, setActive] = useState();
  const [noactive, setNoactive] = useState();
  const filter = "active";
  async function getData() {
    const data = await fetch("http://localhost:3030/seminar");
    const list = await data.json();
    const fi = list.filter((item) => item.status == filter);
    const ya = list.filter((item) => item.status != filter);
    setActive(fi);
    setNoactive(ya);
  }

  return (
    <main id="seminar">
      <Tambah />

      <h1>SEMINAR TERSEDIA</h1>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              ID
            </th>
            <th scope="col" class="px-6 py-3">
              Judul Seminar
            </th>
            <th scope="col" class="px-6 py-3">
              Tanggal
            </th>
            <th scope="col" class="px-6 py-3">
              status
            </th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {active?.map((item) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.id}
              </th>
              <td class="px-6 py-4">{item.judul}</td>
              <td class="px-6 py-4">{item.tanggal}</td>
              <td class="px-6 py-4">{item.status}</td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <PendaftaranSeminar id={item.id} />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>seminar TIDAK TERSEDIA</h1>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              ID
            </th>
            <th scope="col" class="px-6 py-3">
              Judul Seminar
            </th>
            <th scope="col" class="px-6 py-3">
              Tanggal
            </th>
            <th scope="col" class="px-6 py-3">
              status
            </th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {noactive?.map((item) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.id}
              </th>
              <td class="px-6 py-4">{item.judul}</td>
              <td class="px-6 py-4">{item.tanggal}</td>
              <td class="px-6 py-4">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
