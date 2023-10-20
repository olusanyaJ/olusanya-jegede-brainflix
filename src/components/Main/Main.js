import "./Main.scss";
import { useState } from "react";
import videosJson from "../../data/videos.json";
import videosDetailsJson from "../../data/video-details.json";
import VideoDetails from "../VideoDetails/VideoDetails";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import NewComment from "../NewComment/NewComment";
import VideoComments from "../VideoComments/VideoComments";

const Main = () => {
  // Store the JSON in state
  const [videosData, setVideosData] = useState(videosJson[0]);
  const [videosDetails, setVideosDetails] = useState(videosDetailsJson[0]);

  return (
    <main className="main">
      <VideoPlayer videosData={videosData} />
      <div className="main__container">
        <VideoDetails videosDetails={videosDetails} />
        <NewComment />
        <VideoComments videosDetails={videosDetails} />
      </div>
    </main>
  );
};

export default Main;
