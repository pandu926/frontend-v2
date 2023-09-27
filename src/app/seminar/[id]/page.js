"use client";
import { useState, useEffect } from "react";

export default async function page() {
  useEffect(() => {
    getPeserta();
  }, []);

  const [peserta, setPeserta] = useState();
  const [filter, setFilter] = useState();
  const [keyword, setKeyword] = useState();

  const getPeserta = async () => {
    const data = await fetch("http://localhost:3030/peserta", {
      cache: "no-store",
    });
    const res = data.json();
    setFilter(res);
    setPeserta(res);
  };

  return (
    <main>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              ID
            </th>
            <th scope="col" class="px-6 py-3">
              nama
            </th>
            <th scope="col" class="px-6 py-3">
              nim
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
          {peserta?.map((item) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.id}
              </th>
              <td class="px-6 py-4">{item.nama}</td>
              <td class="px-6 py-4">{item.nim}</td>
              <td class="px-6 py-4">{item.status}</td>
              <td class="px-6 py-4 text-right">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Telah Membayar
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
