import "./VideoPlayer.scss";
const VideoPlayer = ({ videosData }) => {
  return (
    <section className="video-player">
      <div className="video-player__wrapper">
        <video
          className="video-player__image"
          width=""
          height=""
          controls
          type="video/mp4"
          poster={videosData.image}
        />
      </div>
    </section>
  );
};

export default VideoPlayer;
