import React, { useEffect } from "react";
import Hero from "./Hero";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Home() {
 

  return (
    <section className="bg-gray-900">
      <Nav />
      <Hero/>
      <Footer/>
    </section>
  );
}
