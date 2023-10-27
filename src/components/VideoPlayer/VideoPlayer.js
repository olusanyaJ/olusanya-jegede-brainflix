import "./VideoPlayer.scss";
const VideoPlayer = ({ activeVideo }) => {
  return (
    <section className="video-player">
      <div className="video-player__wrapper">
        <video
          className="video-player__image"
          width=""
          height=""
          controls
          type="video/mp4"
          poster={activeVideo.image}
        />
      </div>
    </section>
  );
};

export default VideoPlayer;
