import React from "react";
import Breakfast from "./breakfast";
import Thali from "./Thali";
import Roti from "./Roti";
import Drinks from "./Drinks";
import Sweet from "./Sweet";

function All() {
  return (
    <div>
      <Breakfast />
      <Thali />
      <Roti />
      <Drinks />
      <Sweet />
    </div>
  );
}

export default All;
