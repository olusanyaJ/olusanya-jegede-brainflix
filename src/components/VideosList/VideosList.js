import { useEffect, useState } from "react";
import "./VideosList.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const VideosList = ({ activeVideo }) => {
  const [videosList, setVideosList] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(process.env.REACT_APP_BASE_URL);
      const reducedDataSet = data.map((video) => ({
        id: video.id,
        title: video.title,
        image: video.image,
        channel: video.channel,
      }));
      setVideosList(reducedDataSet);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!videosList) {
    return <>Loading, keep waiting lol</>;
  }

  const filteredVideos = videosList.filter(
    (video) => video.id !== activeVideo.id
  );

  return (
    <section className="videos-list">
      <h3 className="videos-list__title">NEXT VIDEOS</h3>
      <div className="videos">
        {filteredVideos.map((video) => {
          return (
            <Link
              to={`/videos/${video.id}`}
              className="videos__item"
              key={video.id}
            >
              <div className="videos__image-container">
                <img
                  className="videos__image"
                  src={video.image}
                  alt="Video Thumbnail"
                />
              </div>
              <div className="videos__desc">
                <p className="videos__title">{video.title}</p>
                <p className="videos__channel">{video.channel}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default VideosList;
