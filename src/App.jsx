import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import HostLayout from "./pages/host/HostLayout";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/vans/Vans";
import Login, { action as loginAction } from "./pages/Login";
import Dashboard, { loader as dashboardLoader } from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import HostVans, { loader as hostVansLoader } from "./pages/host/HostVans";
import HostVanLayout, {
  loader as hostVanLayoutLoader,
} from "./pages/host/HostVanLayout";
import HostVanDetails from "./pages/host/HostVanDetails";
import HostVanPrice from "./pages/host/HostVanPrice";
import HostVanPhoto from "./pages/host/HostVanPhoto";
import Reviews from "./pages/host/Reviews";
import NotFound from "./pages/NotFound";
import ErrorDisplay from "./components/ErrorDisplay";
import VanDetails, { loader as vanDetailsLoader } from "./pages/vans/VanDetails";
import { requireAuth } from "./authentication";
import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          errorElement={<ErrorDisplay />}
          loader={dashboardLoader}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => requireAuth(request)}
        />
        <Route path="vans">
          <Route
            index
            element={<HostVans />}
            errorElement={<ErrorDisplay />}
            loader={hostVansLoader}
          />
          <Route
            path=":id"
            element={<HostVanLayout />}
            errorElement={<ErrorDisplay />}
            loader={hostVanLayoutLoader}
          >
            <Route
              index
              element={<HostVanDetails />}
              loader={async ({ request }) => requireAuth(request)}
            />
            <Route
              path="price"
              element={<HostVanPrice />}
              loader={async ({ request }) => requireAuth(request)}
            />
            <Route
              path="photo"
              element={<HostVanPhoto />}
              loader={async ({ request }) => requireAuth(request)}
            />
          </Route>
        </Route>
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => requireAuth(request)}
        />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="vans">
        <Route
          index
          element={<Vans />}
          errorElement={<ErrorDisplay />}
          loader={vansLoader}
        />
        <Route
          path=":id"
          element={<VanDetails />}
          errorElement={<ErrorDisplay />}
          loader={vanDetailsLoader}
        />
      </Route>
      <Route
        path="login"
        element={<Login />}
        errorElement={<ErrorDisplay />}
        action={loginAction}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
