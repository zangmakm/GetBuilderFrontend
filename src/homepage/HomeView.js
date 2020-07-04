import React from "react";
import "./homeView.scss";
import VideoHeader from "./components/VideoHeader";
import HomeBody from "./components/HomeBody";
import TopNav from "../navigation/TopNav";

function HomeView() {
  return (
    <React.Fragment>
      <TopNav />
      <VideoHeader />
      <HomeBody />
    </React.Fragment>
  );
}

export default HomeView;
