import React from "react";
import HeroSection from "../components/HeroSection";
import Statistics from "../components/Statistics";
import QuizThemes from "../components/QuizThemes";
import RecentGames from "../components/RecentGames";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Statistics />
      <QuizThemes />
      
      <RecentGames />
      <HowItWorks />
      <Testimonials />
      <Partners />
    </div>
  );
};

export default Home;