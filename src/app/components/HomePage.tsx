import React from "react";
import Hero from "./HomePage/Hero"
import Trust from "./HomePage/Trust"
import Category from "./HomePage/Category"
import Acheivements from "./HomePage/Acheivements"
import Courses from "./HomePage/Courses"
import Team from "./HomePage/Team"
import Reviews from "./HomePage/Reviews";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Trust/>
      <Category/>
      <Acheivements/>
      <Courses/>
      <Team/>
      <Reviews/>
    </main>
  );
};

export default HomePage;
