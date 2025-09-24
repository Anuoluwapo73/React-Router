import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";

const RootLayout = () => {
  return (
    <div className="root">
      <NavBar />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
