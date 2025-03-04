import { Avatar , } from "./BlogCard";
import { Link } from "react-router-dom";

export const Appbar = () => {
  return (
    <div className="border-b flex  justify-between px-10 py-4 bg-[#EAE7DC]">
      <Link
        to={"/blogs"}
        className="flex flex-col  cursor-pointer justify-center font-semibold text-2xl "
      >
        <span className="hover:text-slate-600">BlogNest</span>
      </Link>
      <Link to="/publish" className="flex">
        <button
          type="button"
          className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          New
        </button>
        <Avatar name={"Alpha"} />
      </Link>
    </div>
  );
};
