import { useEffect, useState } from "react";
import "./VideosList.scss";
import axios from "axios";

const VideosList = () => {
  const baseUrl = "https://project-2-api.herokuapp.com/";
  const apiKey = "969924e0-6223-4838-a69b-6e5590910a1d";
  const [videosList, setVideosList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}videos/?api_key=${apiKey}`);
        setVideosList(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (!videosList) {
    return <>Loading, keep waiting lol...</>;
  }

  return (
    <section className="videos-list">
      <h3 className="videos-list__title">NEXT VIDEOS</h3>
      <div className="videos">
        {videosList.map((video) => {
          return (
            <button
              className="videos__item"
              key={video.id}
              // onClick={() => {
              //   handleVideoClicked(video.id);
              // }}
            >
              <div className="videos__image-container">
                <img
                  className="videos__image"
                  src={video.image}
                  alt="screenshot of a video"
                />
              </div>
              <div className="videos__desc">
                <p className="videos__title">{video.title}</p>
                <p className="videos__channel">{video.channel}</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default VideosList;
