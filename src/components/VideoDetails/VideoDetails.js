import "./VideoDetails.scss";

const VideoDetails = ({ videosDetails }) => {
  return (
    <section className="video-details">
      <div className="video-details__wrapper">
        <div className="video">
          <h1 className="video__title">{videosDetails.title}</h1>
          <div className="video__specs">
            <span className="video__author">{videosDetails.channel}</span>
            <span className="video__date">{videosDetails.timestamp}</span>
            <button className="video__view">👁️ {videosDetails.views}</button>
            <button className="video__likes">💟 {videosDetails.likes}</button>
          </div>
        </div>
        <span className="video__description">{videosDetails.description}</span>
      </div>
    </section>
  );
};

export default VideoDetails;
