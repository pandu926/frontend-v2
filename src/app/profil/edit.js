"use client";
import Input from "@/components/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function EditProfile({ id }) {
  useEffect(() => {
    getData();
  }, []);
  const [data, setData] = useState("");

  const router = useRouter();
  const handleClick = () => {
    router.push("/profil");
  };

  const handleSave = () => {
    router.push("/profil");
  };

  const getData = async () => {
    axios
      .get(`https://pandusubekti.tech/user/list?id=${id}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="w-full text-indigo-800 h-full t-0 bg-white absolute ">
        <h1 className=" pt-10 font-bold flex justify-center text-lg">
          Edit Profile
        </h1>
        <form>
          <Input
            id="nama"
            nama="nama lengkap"
            value={data.nama}
            tinggi="pt-10"
          />
          <Input id="email" nama="email" value={data.email} />
          <Input id="semester" nama="semester" value={data.semester} />
          <Input id="hp" nama="nomer wa" value={data.hp} />
          <div className="pl-10 pt-10">
            <button
              className="w-2/5 bg-indigo-700 text-lg text-white rounded-md h-10 mr-5"
              onClick={handleSave}
            >
              Simpan
            </button>
            <button onClick={handleClick}>Batalkan</button>
          </div>
        </form>
      </div>
    </div>
  );
}
