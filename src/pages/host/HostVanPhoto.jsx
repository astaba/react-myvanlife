import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPhoto = () => {
  const { van } = useOutletContext();

  return (
    <div>
      <img
        src={van.imageUrl}
        className="van-spec-img"
        alt={`Photo of ${van.name}`}
      />
    </div>
  );
};

export default HostVanPhoto;
