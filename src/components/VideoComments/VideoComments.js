import "./VideoComments.scss";

const VideoComments = ({ videosDetails }) => {
  return (
    <section className="video-section">
      {videosDetails.comments.map((comment) => {
        const timestampDate = new Date(comment.timestamp).toLocaleDateString();
        return (
          <div className="video-comments">
            <div className="video-comments__image"></div>
            <div className="video-comments__wrapper">
              <div className="comment">
                <p className="comment__name">{comment.name}</p>
                <p className="comment__date">{timestampDate}</p>
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
