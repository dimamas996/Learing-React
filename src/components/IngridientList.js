import React from "react";
import Ingridient from "./Ingridient";

export default function IngridientList({ ingridients }) {
  const ingridientElements = ingridients.map((ingridient) => {
    return <Ingridient key={ingridient.id} {...ingridient} />;
  });
  return <div className="ingridient-list">{ingridientElements}</div>;
}
