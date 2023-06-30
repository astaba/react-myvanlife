import React from "react";
import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { getHostVans } from "../../apis";
import { requireAuth } from "../../authentication";

export const loader = async ({ request }) => {
  // console.log("dashboardLoader")
  await requireAuth(request);
  return defer({ hostVansPromise: getHostVans() });
};

const Dashboard = () => {
  const deferedLoaderData = useLoaderData();

  const renderHostVansUI = (hostVans) => {
    return hostVans.map((hostVan) => (
      <li key={hostVan.id} className="gridwiser_01">
        <div className="card-thumbnail gridwiser_01">
          <img src={hostVan.imageUrl} alt={`Photo of ${hostVan.name}`} />
          <div className="info">
            <h3>{hostVan.name}</h3>
            <p>${hostVan.price}/day</p>
          </div>
        </div>
        <Link to={`vans/${hostVan.id}`} className="btn-link follow-link">
          Edit &rarr;
        </Link>
      </li>
    ));
  };

  return (
    <div className="dashboard">
      <section className="flowise intro">
        <h1>Welcome!</h1>
        <div className="gridwiser_01">
          <div className="flowise income-intro">
            <h2>
              Income last <span className="time">30 days</span>
            </h2>
            <p className="big">$2,260</p>
          </div>
          <Link to="income" className="btn-link follow-link">
            Details &rarr;
          </Link>
        </div>
      </section>
      <section className="dash-reviews">
        <div className="gridwiser_01">
          <h2 className="">
            Review score <BsStarFill className="star-icon" /> 5.0<span>/5</span>
          </h2>
          <Link to="reviews" className="btn-link follow-link">
            Details &rarr;
          </Link>
        </div>
      </section>
      <section className="flowise cards-list">
        <div className="banner gridwiser_01">
          <h2>Your listed vans</h2>
          <Link to="vans" className="btn-link follow-link">
            View all &rarr;
          </Link>
        </div>
        <ul className="flowise cards-list-grid">
          <React.Suspense fallback={<h2>Loading...</h2>}>
            <Await resolve={deferedLoaderData.hostVansPromise}>
              {renderHostVansUI}
            </Await>
          </React.Suspense>
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;

/**
 *           <li className="gridwiser_01">
            <div className="van-thumbnail gridwiser_01">
              <img src={hostVans[0].imageUrl} alt="" />
              <div className="info">
                <h3>{hostVans[0].name}</h3>
                <p>${hostVans[0].price}/day</p>
              </div>
            </div>
            <Link
              to={`vans/${hostVans[0].id}`}
              className="btn-link follow-link"
            >
              Edit &rarr;
            </Link>
          </li>
 */
