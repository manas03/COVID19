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
      <div className="py-5 px-5">
        {this.state.articles.map((item, index) => {
          return (
            <div className="container mt-100px py-5">
              <div className="mt-50">
                <h2 style={{ textAlign: "left" }}>{item.title}</h2>;
                <img
                  alt="article"
                  src={item.urlToImage}
                  style={{ width: "30vw" }}
                />
                <p style={{color:"red"}}className="py-2 ">{item.description}</p>
                
                <a href={item.url}>Read More</a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default News;
