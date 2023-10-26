import "./VideosList.scss";

const VideosList = ({ videosData, handleVideoClicked }) => {
  return (
    <section className="videos-list">
      <h3 className="videos-list__title">NEXT VIDEOS</h3>
      <div className="videos">
        {videosData.map((video) => {
          return (
            <button
              className="videos__item"
              key={video.id}
              onClick={() => {
                handleVideoClicked(video.id);
              }}
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
