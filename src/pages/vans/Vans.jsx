import React from "react";
import {
  useLoaderData,
  Link,
  useSearchParams,
  defer,
  Await,
} from "react-router-dom";
import { getVans } from "../../apis";

export const loader = async () => {
  return defer({ vansPromise: getVans() });
};

export default function Vans() {
  const deferedLoaderData = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");
  const updateSearchParams = (key, value) => {
    setSearchParams((prev) => {
      const newUrlSP = new URLSearchParams(prev);
      if (!value) newUrlSP.delete("type");
      else newUrlSP.set(key, value);
      return newUrlSP;
    });
  };

  const renderDeferedUI = (vans) => {
    const filteredVans = vans.filter(
      ((filter) => (van) => {
        return !filter || filter.toLowerCase() === van.type.toLowerCase();
      })(typeFilter)
    );

    return filteredVans.map((van) => (
      <div key={van.id} className={`vans-card ${van.type}`}>
        <Link
          to={van.id}
          state={{ search: searchParams.toString(), typeFilter }}
          className="vans-card-link"
        >
          <img
            src={van.imageUrl}
            className="vans-card-img"
            alt={`Photo of ${van.name}`}
          />
          <div className="info">
            <h2 className="card-title">{van.name}</h2>
            <p className="stats">
              <span className="price">${van.price}</span>/day
            </p>
          </div>
          <hr />
          <i className={`card-type ${van.type}`}>{van.type}</i>
        </Link>
      </div>
    ));
  };

  return (
    <div className="flowise vans">
      <h1 className="title">Explore our van options</h1>
      <section className="filters">
        {["simple", "rugged", "luxury"].map((type, index) => (
          <button
            key={index}
            className={`btn btn-button ${
              typeFilter === type ? "selected " : ""
            }${type}`}
            type="button"
            onClick={() => updateSearchParams("type", `${type}`)}
          >
            {type}
          </button>
        ))}
        {searchParams.has("type") && (
          <button
            className="btn btn-button"
            type="button"
            onClick={() => updateSearchParams("type", null)}
          >
            Clear filter
          </button>
        )}
      </section>
      <section className="vans-grid">
        <React.Suspense fallback={<h2>Loading...</h2>}>
          <Await resolve={deferedLoaderData.vansPromise}>
            {renderDeferedUI}
          </Await>
        </React.Suspense>
      </section>
    </div>
  );
}
