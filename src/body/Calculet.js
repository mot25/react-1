import React from "react";

import "./Body.css";

class Calculet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sumEur: "0",
    };
  }
  subForm = (e) => {
    e.preventDefault();
    console.dir(e.target.elements[1].value);
    console.dir(e.target.elements.numInput.value);
    this.setState({
      sumEur: (
        e.target.elements.numInput.value / e.target.elements[1].value
      ).toFixed(2),
    });
  };
  render() {
    return (
      <div className="Calculet">
        <form onSubmit={this.subForm}>
          <div className="calculetFrom">
            <h3>i want</h3>
            <div className="calcRadio"></div>
            <div className="CalculetSell">
              <input type="number" id="numInput" name="numInput" />
              <select>
                {Object.keys(this.props.all.rates).map((e, i) => {
                  return (
                    <option key={i} value={this.props.all.rates[e]}>
                      {e}
                    </option>
                  );
                })}
              </select>
              <input type="submit" />
            </div>
            <div className="CalculetResult">
              <p>EUR: {this.state.sumEur}</p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Calculet;
