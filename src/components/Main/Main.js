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
  const baseUrl = "https://project-2-api.herokuapp.com/videos/";
  const defaultKey = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const apiKey = "969924e0-6223-4838-a69b-6e5590910a1d";
  const [activeVideo, setActiveVideo] = useState(null);

  const { activeVideoId } = useParams();

  useEffect(() => {
    if (!activeVideoId) {
      const fetchVideosData = async () => {
        try {
          const { data } = await axios.get(
            `${baseUrl}${defaultKey}?api_key=${apiKey}`
          );
          setActiveVideo(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchVideosData();
    } else {
      const fetchVideosData = async () => {
        try {
          const { data } = await axios.get(
            `${baseUrl}${activeVideoId}?api_key=${apiKey}`
          );
          setActiveVideo(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchVideosData();
    }
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
