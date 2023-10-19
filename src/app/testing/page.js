"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import InputLogin from "../../components/inputLogin";

export default function MyForm() {
  const [err, setErr] = useState("");

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nama tidak boleh kosong")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-zA-Z0-9]).{8}$/,
        "Password harus memiliki minimal 1 huruf besar, 1 huruf kecil, 1 angka, dan panjang 8 karakter."
      ),
    email: yup
      .string()
      .email("Format email tidak valid")
      .required("Email tidak boleh kosong"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      await schema.validate(data, { abortEarly: false });

      console.log(data);
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputLogin
          name="name"
          label="Nama"
          control={control}
          rules={{ required: "Nama tidak boleh kosong" }}
        />
        {errors.name && <p>{errors.name.message}</p>}
        {err.name && <p>{err.name.message}</p>}

        <InputLogin
          name="email"
          label="Email"
          control={control}
          rules={{ required: "Email tidak boleh kosong" }}
          type="email"
        />
        {errors.email && <p>{errors.email.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
