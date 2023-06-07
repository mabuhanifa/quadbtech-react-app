import React, { useEffect } from "react";
import Hero from "./Hero";
import Nav from "./Nav";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3001/api");
      const data = await res.json();
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <section className="bg-gray-900">
      <Nav />
      <Hero/>
    </section>
  );
}
