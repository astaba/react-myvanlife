import React from "react";
import {
  Outlet,
  NavLink,
  Link,
  defer,
  Await,
  useLoaderData,
} from "react-router-dom";
import { getVan } from "../../apis";
import { requireAuth } from "../../authentication";

export const loader = async ({ params, request }) => {
  // console.log("hostVanLayoutLoader")
  await requireAuth(request);
  return defer({ vanPromise: getVan(params.id) });
};

const HostVanLayout = () => {
  const deferedLoaderData = useLoaderData();

  const activeStyle = ({ isActive }) => {
    return isActive ? "active-navLink" : "";
  };

  const renderVanUI = (van) => {
    return (
      <section className="flowise detail-card">
        <div className="van-spec-card gridwiser_01">
          <img
            src={van.imageUrl}
            className="van-spec-img"
            alt={`Photo of ${van.name}`}
          />
          <div className="flowise info">
            <i className={`card-type ${van.type}`}>{van.type}</i>
            <h1>{van.name}</h1>
            <p>
              <span className="price">${van.price}</span>/day
            </p>
          </div>
        </div>
        <nav>
          <ul className="navList">
            <li>
              <NavLink to="." end={true} className={activeStyle}>
                Details
              </NavLink>
            </li>
            <li>
              <NavLink to="price" className={activeStyle}>
                Price
              </NavLink>
            </li>
            <li>
              <NavLink to="photo" className={activeStyle}>
                Photo
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet context={{ van }} />
      </section>
    );
  };

  return (
    <div className="flowise hostVans-details">
      <Link to=".." className="btn btn-link">
        &larr; Back to all vans
      </Link>
      <React.Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={deferedLoaderData.vanPromise}>{renderVanUI}</Await>
      </React.Suspense>
    </div>
  );
};

export default HostVanLayout;
