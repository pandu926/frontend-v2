export default function InputLogin(props) {
  return (
    <div className={`pl-10 ${props.tinggi}`}>
      <label
        htmlFor={props.id}
        className="text-indigo-700 text-lg font-extrabold "
      >
        {props.nama}
      </label>
      <input
        onChange={props.change}
        type={props.type}
        id={props.id}
        className="w-72 h-11 block mt-3 text-indigo-600  bg-white rounded-md border-2 border-indigo-700"
        placeholder={props.placeholder}
        required=""
      />
    </div>
  );
}
