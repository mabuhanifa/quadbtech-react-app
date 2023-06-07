import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Nav from "./Nav";
import Table from "./Table";

export default function Home() {
  return (
    <section className="bg-gray-900">
      <Nav />
      <Hero />
      <Table />
      <Footer />
    </section>
  );
}
