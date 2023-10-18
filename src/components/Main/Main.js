import VideoDetails from "../VideoDetails/VideoDetails";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const Main = () => {
  return (
    <main className="main">
      <VideoPlayer />
      <div className="main__container">
        <VideoDetails />
      </div>
    </main>
  );
};

export default Main;
