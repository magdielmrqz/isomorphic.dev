import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
);
