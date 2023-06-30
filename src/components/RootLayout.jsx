import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function RootLayout() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
