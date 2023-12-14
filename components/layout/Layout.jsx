import { useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleNavClose = () => {
    if (toggleNav) setToggleNav(false);
  };

  return (
    <main role="main" className="layout">
      <Navbar toggleNav={toggleNav} setToggleNav={setToggleNav} handleNavClose={handleNavClose} />
      <main className="layout-main pt-16" onClick={handleNavClose}>
        {children}
      </main>
      <Footer handleNavClose={handleNavClose}/>
    </main>
  );
};

export default Layout;
