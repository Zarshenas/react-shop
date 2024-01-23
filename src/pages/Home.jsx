import React from "react";
import HeroHome from "../components/home/HeroHome";
import Features from "../components/home/Feachers";
import FeaturesBlock from "../components/home/FeacherBlockes";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/home/Newsletter";

const Home = () => {
  return (
    <main>
      <HeroHome />
      <Features />
      <FeaturesBlock />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;
