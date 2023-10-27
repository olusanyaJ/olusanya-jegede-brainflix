import "./VideoComments.scss";

const VideoComments = ({ activeVideo }) => {
  return (
    <section className="video-section">
      {activeVideo.comments.map((comment) => {
        const realCommentTime = () => {
          const currentDate = new Date();
          const timestampDate = new Date(comment.timestamp);
          const timeDifference = currentDate - timestampDate;
          const millisecondInOneHour = 1000 * 60 * 60;
          const millisecondInOneMinute = 1000 * 60;
          const hoursAgo = Math.floor(timeDifference / millisecondInOneHour);
          if (hoursAgo === 0) {
            const minutesAgo = Math.floor(
              timeDifference / millisecondInOneMinute
            );
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
          <div className="video-comments" key={comment.id}>
            <div className="video-comments__image"></div>
            <div className="video-comments__wrapper">
              <div className="comment">
                <p className="comment__name">{comment.name}</p>
                <p className="comment__date">
                  {realCommentTime(comment.timestamp)}
                </p>
              </div>
              <p className="comment__message">{comment.comment}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default VideoComments;
