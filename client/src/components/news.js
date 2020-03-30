import React, { Component } from "react";
import { Link } from "react-router-dom";

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
      <div className="mt-8">
        {this.state.articles.map((item, index) => {
          return (
            <div className="container mt-100px pa-5">
              <div className="mt-50">
                <h2 style={{ textAlign: "left" }}>{item.title}</h2>;
                <img
                  alt="article"
                  src={item.urlToImage}
                  style={{ width: "50vw" }}
                />
                <p>{item.description}</p>
                <Link to={item.url}>Read More</Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default News;
