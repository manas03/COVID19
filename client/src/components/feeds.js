import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Scroll from "./layout/Scroll";

const Feeds = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <div className="bg">
      <div className="twitter-timeline d-flex flex-row mx-5 px-5 py-5">
        <div className="twitter-embed vw-100 px-3 py-5">
          <Scroll>
            <Link
              className="twitter-timeline"
              data-theme="dark"
              data-tweet-limit="10"
              data-chrome="nofooter noborders"
              to="https://twitter.com/WHO?ref_src=twsrc%5Etfw"
            >
              Tweets by WHO
            </Link>
          </Scroll>
        </div>
        <div className="twitter-embed vw-100 px-3 py-5">
          <Scroll>
            <Link
              className="twitter-timeline"
              data-theme="dark"
              data-tweet-limit="10"
              data-chrome="nofooter noborders"
              to="https://twitter.com/mohfw_india?lang=en"
            >
              Tweets by mHRD
            </Link>
          </Scroll>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
