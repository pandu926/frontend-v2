import { useForm, Controller } from "react-hook-form";

export default function InputLogin({
  type,
  tinggi,
  name,
  label,
  control,
  rules,
}) {
  return (
    <>
      <div className={`pl-10 ${tinggi}`}>
        <label
          className="text-indigo-700 text-lg font-extrabold"
          htmlFor={name}
        >
          {label}:
        </label>
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => {
            return (
              <input
                type={`${type}`}
                className=" w-72 h-11 block mt-3 text-indigo-600  bg-white rounded-md border-2 border-indigo-700"
                {...field}
              />
            );
          }}
        />
      </div>
    </>
  );
}
