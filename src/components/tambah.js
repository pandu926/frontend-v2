"use client";
import React, { useState } from "react";
import Input from "./input";
import axios from "axios";

export default function Tambah(props) {
  const [isOpen, setOpen] = useState(false);
  const [status, setStatus] = useState("peserta");
  const [link, setLink] = useState("peserta");
  const pembayaran = "belum";
  const id_user = props.user;
  const id_seminar = props.seminar.id;
  const handleOptionChange = (event) => {
    setStatus(event.target.value);
    console.log(status);
  };

  const handleSave = async () => {
    axios
      .post("https://pandusubekti.tech/daftarseminar", {
        id_user,
        id_seminar,
        link,
        status,
        pembayaran,
      })
      .then((response) => {
        // Handle respons sukses (status kode 200 OK)
        console.log(response);
      })
      .catch((error) => {
        if (error.response) {
          // Handle respons dengan kode status 400
          console.log("Error Kode Status:", error.response.status);
          console.log("Pesan Error:", error.response.data);
        } else if (error.request) {
          // Handle kesalahan permintaan (misalnya, tidak ada respons dari server)
          console.log("Tidak Ada Respons:", error.request);
        } else {
          // Handle kesalahan lainnya
          console.log("Error Lainnya:", error.message);
        }
      });
  };

  const openModal = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-16 mt-3"
        type="button"
      >
        Daftar
      </button>

      <div
        className={`fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div className="relative w-full max-w-2xl max-h-full capitalize">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {props.seminar.nama}
              </h3>
              <button
                onClick={openModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="text-indigo-700 flex justify-between pl-10 pr-10">
                <div>
                  <label>
                    <input
                      type="radio"
                      name="choice"
                      value="peserta"
                      checked={status === "peserta"}
                      onChange={handleOptionChange}
                    />
                    peserta
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="choice"
                      value="penyeminar"
                      checked={status === "penyeminar"}
                      onChange={handleOptionChange}
                    />
                    penyeminar
                  </label>
                </div>
              </div>
              <form>
                <div className={` ${status == "peserta" ? "hidden" : ""}`}>
                  <Input
                    change={(e) => setLink(e.target.value)}
                    id="link"
                    nama="link materi"
                    type="text"
                    placeholder="link menuju materi di gdrive"
                  />
                </div>
                <div classNameName="mb-6">
                  <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide="defaultModal"
                      type="button"
                      onClick={handleSave}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Daftar
                    </button>
                    <button
                      onClick={openModal}
                      data-modal-hide="defaultModal"
                      type="button"
                      className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                      Batalkan
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
