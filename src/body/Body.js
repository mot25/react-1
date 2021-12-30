import React from "react";

import ItemsRate from "./ItemsRate";
import Calculet from "./Calculet";
import JSON from "../latest.json";
import "./Body.css";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: {},
      date: "",
      base: "",
    };
    this.stateRate();
  }

  stateRate = () => {
    let arrRates = ["RUB", "AED", "AFN", "AUD", "AMD", "USD"];
    let filterRate = {
      rates: {},
    };
    for (let i = 0; i < arrRates.length; i++) {
      filterRate.rates[arrRates[i]] = JSON.rates[arrRates[i]];
    }
    // console.log(filterRate);
    filterRate.base = "EUR";
    this.state.arr = filterRate;
    this.state.base = JSON.base;
  };

  render() {
    return (
      <div className="body">
        <div className="container">
          <h1>echange rate on {this.state.data}</h1>
          <ItemsRate all={this.state.arr} />
          <h1>calculet exchange</h1>
          <Calculet all={this.state.arr} />
        </div>
      </div>
    );
  }
}

export default Body;
