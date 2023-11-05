import "./Main.scss";
import { useEffect, useState } from "react";
import VideoDetails from "../VideoDetails/VideoDetails";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import NewComment from "../NewComment/NewComment";
import VideoComments from "../VideoComments/VideoComments";
import VideosList from "../VideosList/VideosList";
import axios from "axios";
import { useParams } from "react-router-dom";

const Main = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const { activeVideoId } = useParams();

  useEffect(() => {
    const fetchVideosData = async () => {
      try {
        if (!activeVideoId) {
          const { data } = await axios.get(process.env.REACT_APP_BASE_URL);
          setActiveVideo(data[0]);
        } else {
          const { data } = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/${activeVideoId}`
          );
          setActiveVideo(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideosData();
  }, [activeVideoId]);

  if (!activeVideo) {
    return <>Loading, time for a quick coffee</>;
  }

  return (
    <main className="main">
      <VideoPlayer activeVideo={activeVideo} />
      <div className="main__container">
        <div className="main__details">
          <VideoDetails activeVideo={activeVideo} />
          <NewComment />
          <VideoComments activeVideo={activeVideo} />
        </div>
        <div className="main__playlist">
          <VideosList activeVideo={activeVideo} />
        </div>
      </div>
    </main>
  );
};

export default Main;
