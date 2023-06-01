import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async function get_data() {
      const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await res.json();
      console.log(data);
    }
    get_data();
  }, []);
  return (
    <div>
      <div></div>
    </div>
  );
}
