import React from "react";
import "./homeView.scss";
import VideoHeader from "./components/VideoHeader";
import HomeBody from "./components/HomeBody";

function HomeView() {
  return (
    <div>
      <VideoHeader />
      <HomeBody />
    </div>
  );
}

export default HomeView;
