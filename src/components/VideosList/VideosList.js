import "./VideosList.scss";

const VideosList = ({ videosData, handleVideoClicked }) => {
  return (
    <section className="videos-list">
      <h3 className="videos-list__title">NEXT VIDEOS</h3>
      <div className="videos">
        {videosData.map((video) => {
          console.log(video.image);

          return (
            <button
              key={video.id}
              onClick={() => {
                handleVideoClicked(video.id);
              }}
            >
              <img className="imagee" src={video.image} alt="" />
              <div>
                <p>{video.title}</p>
                <p>{video.channel}</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default VideosList;
