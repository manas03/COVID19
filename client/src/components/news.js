import React, { Component } from "react";


class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?q=COVID&country=in&fom=2020-03-26&sortBy=published&apiKey=2483107fe86b401395efd293e68744fd"
    )
      .then(response => response.json())
      .then(myJson => {
        this.setState({
          articles: myJson.articles
        });
      });
  }

  render() {
    return (
      <div className=" justify-content-center mt-5 py-5">
        {this.state.articles.map((item, index) => {
          return (
            <div className="container py-3">
              <div className="border rounded shadow overflow-auto">
                <h2
                  style={{
                    textAlign: "left",
                    padding: "5px"
                  }}
                >
                  {item.title}
                </h2>
                <img
                  alt="article"
                  src={item.urlToImage}
                  style={{
                    width: "400px",
                    borderRadius: "15px",
                    float: "right",
                    padding: "0px 15px 15px 5px"
                  }}
                />
                <p className="px-2 py-3">{item.description}</p>
                <a
                  href={item.url}
                  target="_blank"
                  className="px-2 font-italic d-flex align-items-end"
                >
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default News;
