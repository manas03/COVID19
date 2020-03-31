import React, { Component } from "react";
import SearchBox from "./SearchBox";
import "../App.css";
import CountryList from "./contrylist";
import Scroll from "./layout/Scroll";

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
    const { items ,searchField} = this.state;

    const searchResult = items.filter(result => {
      return result.country
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });

    return !items.length ? 
    <h1>Loading...</h1>:
    (
      <div className="py-5 px-5">
        <div className="py-5">
          <div>
            <SearchBox
              className="px-2 py-2"
              searchChange={this.onSearchChange}
            />
      {/*     <table className="table table-bordered table-hover">
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
                </table>*/}
               
              
                <table className="table table-bordered table-hover">
                <tr className="thead-dark">
                <th style={{width:'3vw'}}></th>
                <th style={{width:'20vw'}}>Country</th>
                <th style={{width:'15vw'}}>Cases</th>
                <th style={{width:'15vw'}}>Active Cases</th>
                <th  style={{width:'15vw'}}>Recoverd</th>
                <th style={{width:'15vw'}}>Death</th>
                <th style={{width:'15vw'}}>Cases Per Milllion</th>
              </tr>
              </table>
                <CountryList items={searchResult}/>
              
                
          </div>
        </div>
      </div>
    );
  }
}

export default Data;
