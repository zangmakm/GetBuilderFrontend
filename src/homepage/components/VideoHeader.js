import React from "react";
import homeHeader from "../home_header.mp4";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FindMoreBtn = styled.div`
  border-radius: 3px;
  background-color: #f58232;
  width: 30%;
  margin: 0 auto;
  a {
    color: #fff;
  }
`;

class VideoHeader extends React.Component {
  componentDidMount() {
    let video = document.querySelector("video");

    window.addEventListener("scroll", function () {
      let value = 1 + window.scrollY / -600;

      video.style.opacity = value;
    });
  }
  render() {
    return (
      <section>
        <video src={homeHeader} autoPlay muted loop></video>
        <div className="homeHeader-text">
          <h1>Builders Buddy 1</h1>
          <h3>We build all through QUEENSLAND</h3>
          <FindMoreBtn>
            <Link to="/service">Post a task</Link>
          </FindMoreBtn>
        </div>
      </section>
    );
  }
}

export default VideoHeader;
