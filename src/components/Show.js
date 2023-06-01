import React from "react";

export default function Show({ show }) {
  const {
    show: {
      name,
      image: { original, medium },
    },
  } = show;
  return (
    <div className="shad p-3 rounded">
      <h1 className="">{name}</h1>
      <img src={original} alt="main" className="w-96"/>
    </div>
  );
}
