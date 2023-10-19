import { useState } from "react";
import VideosList from "../../components/VideosList/VideosList";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const Video = () => {
  // Keep track of the active pokemon for the <Display /> component
  const [activeVideo, setActiveVideo] = useState(videosDetailsJson[0]);

  // A function, which is passed to <videosList />, which recieves the id of the newly clicked video
  // Finds the videoDetails for that pokemon, and updates the activePokemon state with the found pokemonDetails
  const handleClickVideo = (id) => {
    // From the full list of videosDetails, find the videosDetails which matches the id that was clicked
    const newActiveVideo = videosDetails.find((video) => {
      return video.id === id;
    });

    // Update the active video with the found videosDetails
    setActiveVideo(newActiveVideo);
  };

  return (
    <section className="video">
      <VideosList videos={videos} handleClickVideo={handleClickVideo} />
      {/* <VideoPlayer activeVideo={activeVideo} /> */}
    </section>
  );
};

export default Video;
