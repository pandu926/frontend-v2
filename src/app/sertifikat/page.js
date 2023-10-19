"use client";
import protectRoute from "@/components/protectRoute";

const page = ({ data }) => {
  return (
    <div className="ml-5 mr-5 mt-10">
      <h1 className="pl-10 font-bold text-lg">Sertifikat</h1>
    </div>
  );
};

export default protectRoute(page);
