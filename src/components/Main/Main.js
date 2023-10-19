import "./Main.scss";
import { useState } from "react";
import videosJson from "../../data/videos.json";
import videosDetailsJson from "../../data/video-details.json";
import VideoDetails from "../VideoDetails/VideoDetails";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Comment from "../Comment/Comment";

const Main = () => {
  // Store the JSON in state
  const [videosData, setVideosData] = useState(videosJson[0]);
  const [videosDetails, setVideosDetails] = useState(videosDetailsJson[0]);

  return (
    <main className="main">
      <VideoPlayer videosData={videosData} />
      <div className="main__container">
        <VideoDetails videosDetails={videosDetails} />
        <Comment />
        rdxtcfyvgbuhnij xdcfgvbhjn dcfgvbhjnk
      </div>
    </main>
  );
};

export default Main;
