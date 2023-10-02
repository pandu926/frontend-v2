import Image from "next/image";
import Link from "next/link";
Link;
export default function Menu(props) {
  return (
    <Link href={props.link}>
      <div className="edit relative top-14 mb-5 ml-16 w-60 h-8 flex border-b-2 border-black">
        <Image className="pb-2" src={props.image} width={40} height={40} />
        <div className="  text-indigo-700 text-base font-bold ">
          {props.nama}
        </div>
      </div>
    </Link>
  );
}
