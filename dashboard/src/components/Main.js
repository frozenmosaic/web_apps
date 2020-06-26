import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function Main(props) {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default Main;
