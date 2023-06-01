import React from "react";

export default function Show({ show }) {
  const {
    show: { name },
  } = show;
  return (
    <div className="shad">
      <h1>{name}</h1>
    </div>
  );
}
