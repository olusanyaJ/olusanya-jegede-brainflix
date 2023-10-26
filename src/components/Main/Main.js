import "./Main.scss";
import { useEffect, useState } from "react";
// import videosJson from "../../data/videos.json";
// import videosDetailsJson from "../../data/video-details.json";
import VideoDetails from "../VideoDetails/VideoDetails";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import NewComment from "../NewComment/NewComment";
import VideoComments from "../VideoComments/VideoComments";
import VideosList from "../VideosList/VideosList";
import axios from "axios";

const Main = () => {
  const baseUrl = "https://project-2-api.herokuapp.com/";
  const apiKey = "969924e0-6223-4838-a69b-6e5590910a1d";
  const [activeVideo, setActiveVideo] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data } = await axios.get(`${baseUrl}videos/?api_key=${apiKey}`);
  //       console.log(data);
  //       setVideosList(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const handleVideoClicked = (clickedVideoId) => {
  //   const clickedVideo = videosDetailsJson.find(
  //     (video) => video.id === clickedVideoId
  //   );
  //   setActiveVideo(clickedVideo);
  // };

  // const filterActiveVideo = videosJson.filter(
  //   (video) => video.id !== activeVideo.id
  // );

  if (!activeVideo) {
    return <>Loading, time for a quick coffee</>;
  }

  return (
    <main className="main">
      {/* <VideoPlayer videosData={activeVideo} /> */}
      <div className="main__container">
        <div className="main__details">
          {/* <VideoDetails videosDetails={activeVideo} /> */}
          {/* <NewComment /> */}
          {/* <VideoComments videosDetails={activeVideo} /> */}
        </div>
        <div className="main__playlist">
          <VideosList
          // videosData={filterActiveVideo}
          // handleVideoClicked={handleVideoClicked}
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
