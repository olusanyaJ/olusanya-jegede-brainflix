import "./VideoPlayer.scss";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";

// const VideoPlayer = ({ activeVideo }) => {
const VideoPlayer = () => {
  return (
    <section className="video-player">
      <img className="image" src={userAvatar} alt="" />
    </section>
  );
};

export default VideoPlayer;
