import React from "react";
import Hero from "../components/Hearo.jsx";
import Categories from "../components/Categories.jsx";
import Offer from "../components/Offer.jsx";
import Features from "../components/Features.jsx";
import Footer from "../components/Footer.jsx";
const Layout = () => {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="categories">
        <Categories />
      </section>
      <section id="offer">
        <Offer />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
