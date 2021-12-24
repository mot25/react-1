import React from "react";

import ItemsRate from "./ItemsRate";
import Calculet from "./Calculet";

import "./Body.css";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      echangeRate: {},
      date: "",
    };
    this.current = ["PHP", "RUB", "AMD"];
    this.getRate();
  }

  getRate = async () => {
    await fetch(
      "http://api.exchangeratesapi.io/v1/latest?access_key=ee27167c685e1a2d1965bd00003a30bb&format=1"
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log("data", data);
        this.setState({ date: data.date });
        let result = {};
        for (let i = 0; i < this.current.length; i++) {
          result[this.current[i]] = data.rates.this.current[i];
        }
        this.setState({ echangeRate: result });
        console.log("result", result);
      });
  };

  render() {
    return (
      <div className="body">
        <div className="container">
          <h1>echange rate on {this.state.data}</h1>
          <div className="bodyItems">
            <ItemsRate arr={this.state.echangeRate} />
          </div>
          <h1>calculet exchange</h1>
          <Calculet />
        </div>
      </div>
    );
  }
}

export default Body;
