import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Feeds = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <section className="twitter-timeline py-5 col-md-6">
      <div className="twitter-embed py-5  justify-content-center">
        <Link
          className="twitter-timeline"
          data-theme="dark"
          data-tweet-limit="10"
          data-chrome="nofooter noborders"
          to="https://twitter.com/WHO?ref_src=twsrc%5Etfw"
        >
          Tweets by WHO
        </Link>
      </div>
    </section>
  );
};

export default Feeds;

//  <a class="twitter-timeline" data-width="400" data-height="400" data-theme="dark" href="https://twitter.com/WHO?ref_src=twsrc%5Etfw">Tweets by WHO</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
