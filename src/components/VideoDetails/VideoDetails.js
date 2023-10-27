import "./VideoDetails.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

const VideoDetails = ({ activeVideo }) => {
  const realCommentTime = () => {
    const currentDate = new Date();
    const timestampDate = new Date(activeVideo.timestamp);
    const timeDifference = currentDate - timestampDate;
    const millisecondInOneHour = 1000 * 60 * 60;
    const millisecondInOneMinute = 1000 * 60;
    const hoursAgo = Math.floor(timeDifference / millisecondInOneHour);
    if (hoursAgo === 0) {
      const minutesAgo = Math.floor(timeDifference / millisecondInOneMinute);
      if (minutesAgo < 1) {
        return "Just now";
      } else if (minutesAgo === 1) {
        return "1 minute ago";
      } else {
        return `${minutesAgo} minutes ago`;
      }
    } else if (hoursAgo === 1) {
      return "1 hour ago";
    } else if (hoursAgo <= 24) {
      return `${hoursAgo} hours ago`;
    } else {
      return timestampDate.toLocaleDateString();
    }
  };

  return (
    <section className="video-details">
      <div className="video-details__wrapper">
        <div className="video">
          <h1 className="video__title">{activeVideo.title}</h1>
          <div className="video__specs">
            <div className="video__credentials">
              <span className="video__author">By {activeVideo.channel}</span>
              <span className="video__date">
                {realCommentTime(activeVideo.timestamp)}
              </span>
            </div>
            <div className="video__stats">
              <div className="video__wrapper video__wrapper--top">
                <img src={viewsIcon} alt="views icon" className="video__icon" />
                <p className="video__button-text">{activeVideo.views}</p>
              </div>
              <div className="video__wrapper">
                <img src={likesIcon} alt="likes icon" className="video__icon" />
                <p className="video__button-text">{activeVideo.likes}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="video__text">
          <p className="video__description">{activeVideo.description}</p>
        </div>
      </div>
    </section>
  );
};

export default VideoDetails;
