import { useForm, Controller } from "react-hook-form";

export default function CustomInput({ name, label, control, rules }) {
  return (
    <div>
      <label htmlFor={name}>{label}:</label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => {
          return <input {...field} />;
        }}
      />
    </div>
  );
}
