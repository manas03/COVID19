import React from "react";

const NewsItem = ({ datetime, headline, source, url, summary }) => {
  return (
    <div>
      <a href={url} target="_blank" rel="noopener">
        {" "}
        <h3>{headline}</h3>{" "}
      </a>
      <div>
        Source: <em>{source}</em>, {datetime}
      </div>
      <div>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default NewsItem;
