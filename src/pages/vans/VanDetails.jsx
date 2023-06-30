import React from "react";
import {
  useLoaderData,
  Link,
  useLocation,
  defer,
  Await,
} from "react-router-dom";
import { getVan } from "../../apis";

export const loader = async ({ params }) => {
  return defer({ vanPromise: getVan(params.id) });
};

const VanDetails = () => {
  const deferedLoaderData = useLoaderData();
  const location = useLocation();

  const backPathQuery = location.state?.search
    ? `?${location.state.search}`
    : "";
  const backMessage = location.state?.typeFilter || "all";

  const renderVanUI = (van) => {
    return (
      <section className="flowise van-info">
        <img
          src={van.imageUrl}
          className="vans-card-img"
          alt={`Photo of ${van.name}`}
        />
        <i className={`card-type ${van.type}`}>{van.type}</i>
        <h1 className="title">{van.name}</h1>
        <p className="stats">
          <span className="price">${van.price}</span>/day
        </p>
        <p className="description">{van.description}</p>
        <button className="btn btn-button" type="button">
          Rent this van
        </button>
      </section>
    );
  };

  return (
    <div className="flowise van-details">
      <section className="">
        <Link to={`..${backPathQuery}`} className="btn btn-link">
          &larr; Back to {backMessage} vans
        </Link>
      </section>
      <React.Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={deferedLoaderData.vanPromise}>{renderVanUI}</Await>
      </React.Suspense>
    </div>
  );
};

export default VanDetails;
