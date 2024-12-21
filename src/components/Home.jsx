import React from "react";
import Priceing from "./priceing";
import Services from "./Services";
import Products from "./Products";

import HomeHeader from "./HomeHeader";
import WhychooseUs from "./whychooseUs";
import Featuredsec from "./Featuredsec";
import About from "./About";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <>
      <HomeHeader />
      <WhychooseUs />
      <Priceing />
      <Services />
      <Products />
      <Featuredsec />
      <About />
      <Testimonials />
    </>
  );
}

export default Home;
