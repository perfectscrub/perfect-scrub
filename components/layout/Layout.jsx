import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <main role="main" className="layout">
      <Navbar />
      <main className="layout-main">{children}</main>
      <Footer />
    </main>
  );
};

export default Layout;
