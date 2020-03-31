import React, { Component } from "react";
import SearchBox from "./SearchBox";
import "../App.css";

class Data extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://corona.lmao.ninja/countries?sort=country")
      .then(response => response.json())
      .then(json => {
        this.setState({
          items: json
        });
      });
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { items } = this.state;

    const searchResult = this.state.items.filter(result => {
      return result.country
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="py-5 px-5">
        <div className="py-5">
          <div>
            <SearchBox
              className="px-2 py-2"
              searchChange={this.onSearchChange}
            />
            <table className="table table-bordered table-hover">
              <tr className="thead-dark">
                <th></th>
                <th>Country</th>
                <th>Cases</th>
                <th>Active Cases</th>
                <th>Recoverd</th>
                <th>Death</th>
                <th>Cases Per Milllion</th>
              </tr>
              <tbody>
                {items.reverse().map(item => (
                  <tr>
                    <td key={item.id}>
                      <img
                        alt="flag"
                        src={item.countryInfo.flag}
                        style={{ width: "16px" }}
                      />
                    </td>
                    <th key={item.id}>{item.country}</th>
                    <td key={item.id}>{item.cases}</td>
                    <td key={item.id}>{item.active}</td>
                    <td key={item.id}>{item.recovered}</td>
                    <td key={item.id}>{item.deaths}</td>
                    <td key={item.id}>{item.casesPerOneMillion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Data;
