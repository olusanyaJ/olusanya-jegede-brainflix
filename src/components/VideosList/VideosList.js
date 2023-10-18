import Video from "../Video/Video";

const VideoList = ({ videos, handleClickVideo }) => {
  return (
    <>
      {/* Map over the videos prop */}
      {videos.map((video) => {
        return (
          <article
            className="video"
            key={video.id}
            onClick={() => handleClickVideo(video.id)}
          >
            {" "}
            {/* Add an onClick handler and pass the id */}
            <h3 className="video__name">{video.description}</h3>
          </article>
        );
      })}
    </>
  );
};

export default VideoList;
