import "./VideoPlayer.scss";
const VideoPlayer = ({ videosData }) => {
  return (
    <section className="video-player">
      <div className="video-player__wrapper">
        <video className="video-player__image" width="" height="" controls>
          <source src={videosData.image} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default VideoPlayer;
