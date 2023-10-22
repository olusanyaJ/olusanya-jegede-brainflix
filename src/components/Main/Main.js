import "./Main.scss";
import { useState } from "react";
import videosJson from "../../data/videos.json";
import videosDetailsJson from "../../data/video-details.json";
import VideoDetails from "../VideoDetails/VideoDetails";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import NewComment from "../NewComment/NewComment";
import VideoComments from "../VideoComments/VideoComments";
import VideosList from "../VideosList/VideosList";

const Main = () => {
  const [activeVideo, setActiveVideo] = useState(videosDetailsJson[0]);

  const handleVideoClicked = (clickedVideoId) => {
    const clickedVideo = videosDetailsJson.find(
      (video) => video.id === clickedVideoId
    );
    setActiveVideo(clickedVideo);
  };

  const filterActiveVideo = videosJson.filter(
    (video) => video.id !== activeVideo.id
  );

  return (
    <main className="main">
      <VideoPlayer videosData={activeVideo} />
      <div className="main__container">
        <div className="main__details">
          <VideoDetails videosDetails={activeVideo} />
          <NewComment />
          <VideoComments videosDetails={activeVideo} />
        </div>
        <div className="main__playlist">
          <VideosList
            videosData={filterActiveVideo}
            handleVideoClicked={handleVideoClicked}
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
