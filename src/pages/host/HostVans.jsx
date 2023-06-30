import React from "react";
import { Link, defer, useLoaderData, Await } from "react-router-dom";
import { getHostVans } from "../../apis";
import { requireAuth } from "../../authentication";

export const loader = async ({ request }) => {
  // console.log("hostVansLoader")
  await requireAuth(request);
  return defer({ hostVans: getHostVans() });
};

const HostVans = () => {
  const deferedLoaderData = useLoaderData();

  const renderHostVansUI = (hostVans) => {
    return hostVans.map((hostVan) => (
      <li key={hostVan.id}>
        <Link to={hostVan.id}>
          <div className="card-thumbnail gridwiser_01">
            <img src={hostVan.imageUrl} alt={`Photo of ${hostVan.name}`} />
            <div className="info">
              <h3>{hostVan.name}</h3>
              <p>${hostVan.price}/day</p>
            </div>
          </div>
        </Link>
      </li>
    ));
  };

  return (
    <section className="flowise hostVans cards-list">
      <h1>Your listed vans</h1>
      <ul className="flowise cards-list-grid">
        <React.Suspense fallback={<h2>Loading...</h2>}>
          <Await resolve={deferedLoaderData.hostVans}>{renderHostVansUI}</Await>
        </React.Suspense>
      </ul>
    </section>
  );
};

export default HostVans;
