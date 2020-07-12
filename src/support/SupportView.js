import React from "react";
import TopNav from "../navigation/TopNav";
import SupportContent from "./SupportContent";
import Footer from "../homepage/components/Footer";

function SupportView() {
  return (
    <React.Fragment>
      <TopNav />
      <SupportContent />
      <Footer />
    </React.Fragment>
  );
}

export default SupportView;
