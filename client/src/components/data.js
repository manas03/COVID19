import React, { Component } from "react";

class Data extends Component {
  constructor() {
    super();
    this.state = {
      items: []
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

  render() {
    const { items } = this.state;
    return (
      <div>
        <div className="container">
          <div>
            <table>
              <tr>
                <th></th>
                <th>Country</th>
                <th>Cases</th>
                <th>ActiveCases</th>
                <th>Recoverd</th>
                <th>Death</th>
              </tr>

              {items.reverse().map(item => (
                <tr>
                  <td key={item.id}>
                    <img
                      src={item.countryInfo.flag}
                      style={{ width: "16px" }}
                    />
                  </td>

                  <th key={item.id}>{item.country}</th>
                  <td key={item.id}>{item.cases}</td>
                  <td key={item.id}>{item.active}</td>
                  <td key={item.id}>{item.recovered}</td>
                  <td key={item.id}>{item.deaths}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Data;
