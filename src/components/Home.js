import React from "react";
import Banner  from "./Banner";
import SearchBar from "./SearchBar";
import ThingsSection from "./ThingsSection";
import ExclusiveDeals from "./SectionExclusiveDeals";
import BestVacationSection from "./BestVacationSection";
import Testimonials from "./Testimonials";
import LatestBlog from "./LatestBlog";
import SubscribeSection from "./SubscribeSection";
import Footer from "./Footer";

const Home = () =>{
  const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  };
  return(
    <div className="container" style={style}>
      <Banner/>
      <SearchBar/>
      <ThingsSection/>
      <ExclusiveDeals/>
      <BestVacationSection/>
      <Testimonials/>
      <LatestBlog/>
      <SubscribeSection/>
      <Footer/>
    </div>
  );
};

export default Home