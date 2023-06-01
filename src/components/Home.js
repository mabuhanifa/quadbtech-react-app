import React, { useEffect, useState } from "react";
import Show from "./Show";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function get_data() {
      const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await res.json();
      setData(data);
    }
    get_data();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4 p-5">
      {data && data.map((item) => <Show show={item} key={item.show.id} />)}
    </div>
  );
}
