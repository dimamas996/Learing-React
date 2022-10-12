import React from "react";
import Searching from "./Searching";

export default function Heading() {
  return (
    <div className="header">
      <h1 className="header-title">Recipes App</h1>
      <Searching />
    </div>
  );
}
