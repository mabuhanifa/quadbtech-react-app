import React, { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { RiSearchLine } from "react-icons/ri";
import Show from "./Show";

export default function Home() {
  const [query, setQuery] = useState("");
  //   const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    async function get_data() {
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
      const data = await res.json();
      setData(data);
    }
    get_data();
  }, [query]);
  return (
    <>
      <nav className="flex flex-col-reverse gap-y-5 shad rounded-lg py-3 px-5 lg:flex-row justify-around items-center">
        <div className="">
          <span className="font-bold">TV Maze</span>
        </div>
        <div className="flex flex-col gap-y-5 lg:flex-row items-center">
          <div className="relative">
            <input
              type="text"
              className="bg-gray-200 rounded-md py-2 w-96 px-10"
              placeholder="Search"
              onChange={(e) => setQuery(e.target.value)}
            />
            <RiSearchLine className="text-gray-400 text-2xl absolute left-2 top-2" />
          </div>
        </div>
        <div>
          <button>
            <CiUser className="text-2xl text-gray-600 mt-1.5" />
          </button>
        </div>
      </nav>

      <div className="grid grid-cols-3 gap-4 p-5">
        {data && data.map((item) => <Show show={item} key={item.show.id} />)}
      </div>
    </>
  );
}
