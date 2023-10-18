import "./VideoDetails.scss";

// const VideoPlayer = ({ activeVideo }) => {
const VideoDetails = () => {
  return (
    <section className="video-details">
      <div>
        {/* video details */}
        <div>
          <h1>BMX Rampage: 2021 Highlights</h1>
          <div>
            <span>By Red Crow</span>
            <span>date</span>
            <button>views</button>
            <button>like</button>
          </div>
        </div>
        {/* video description */}
        <div>
          <span>
            On a gusty day in Southern Utah, a group of 25 daring mountain
            bikers blew the doors off what is possible on two wheels, unleashing
            some of the biggest moments the sport has ever seen. While mother
            nature only allowed for one full run before the conditions made it
            impossible to ride, that was all that was needed for event veteran
            Kyle Strait, who won the event for the second time -- eight years
            after his first Red Cow Rampage title
          </span>
        </div>
        {/* form comment */}
        <div></div>
        {/* video comments */}
      </div>
      <div></div>
    </section>
  );
};

export default VideoDetails;
