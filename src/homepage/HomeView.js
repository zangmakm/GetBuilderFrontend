import React from "react";
import "./homeView.scss";
import VideoHeader from "./components/VideoHeader";
import HomeBody from "./components/HomeBody";
import TopNav from "../navigation/TopNav";

function HomeView() {
  return (
    <div>
      <TopNav />
      <VideoHeader />
      <HomeBody />
    </div>
  );
}

export default HomeView;
