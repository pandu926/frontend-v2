import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Seminar(props) {
  const id = props.user;
  const [seminarid, setSeminarid] = useState([]);
  const [seminarData, setSeminarData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    axios
      .get(`https://pandusubekti.tech/daftarseminar/peserta?id=${id}`)
      .then((response) => {
        const seminarIds = response.data.map((item) => item.id_seminar);

        // Set state to store seminar ids
        setSeminarid(seminarIds);

        // Fetch seminar data for each seminar id
        fetchSeminarData(seminarIds);
      })
      .catch((error) => {
        handleAxiosError(error);
      });
  };

  const fetchSeminarData = async (seminarIds) => {
    const seminarDataPromises = seminarIds.map(async (seminarId) => {
      axios
        .get(`https://pandusubekti.tech/seminar/list?id=${seminarId}`)
        .then((response) => {
          return response.data;
        })

        .catch((error) => {
          handleAxiosError(error);
          return null;
        });
    });

    // Wait for all promises to resolve
    const seminarDataResults = await Promise.all(seminarDataPromises);
    console.log(Semo)

    // Filter out null results (failed requests)
    const filteredSeminarData = seminarDataResults.filter(
      (data) => data !== null
    );

    // Set state to store seminar data
    setSeminarData(filteredSeminarData);
  };

  const handleAxiosError = (error) => {
    if (error.response) {
      console.log("Error Kode Status:", error.response.data);
      console.log("Pesan Error:" + error.response.data);
    } else if (error.request) {
      console.log("Tidak Ada Respons:", error.request);
    } else {
      console.log("Error Lainnya:", error.message);
    }
  };

  return (
    <div className="text-white">
      {seminarData.map((seminar, index) => (
        <div
          key={index}
          className="edit relative top-14 mb-5 ml-4 w-72 h-8 flex border-b-2 border-white"
        >
          <div className="text-base font-bold pr-10 ">{index + 1}. </div>
          <div className="text-base font-bold "></div>
        </div>
      ))}
    </div>
  );
}
