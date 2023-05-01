import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="layout-main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
