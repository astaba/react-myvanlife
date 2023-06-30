import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanDetails = () => {
  const { van } = useOutletContext();

  return (
    <div className="van-spec-details">
      <ul className="flowise">
        <li><span>Name: </span>{van.name}</li>
        <li><span>Category: </span>{van.type}</li>
        <li><span>Description: </span>{van.description}</li>
        <li><span>Visibility: </span>Public</li>
      </ul>
    </div>
  );
};

export default HostVanDetails;
