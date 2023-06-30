import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPrice = () => {
  const { van } = useOutletContext();

  return (
    <p>
      <span className="price">${van.price}</span>/day
    </p>
  );
};

export default HostVanPrice;
