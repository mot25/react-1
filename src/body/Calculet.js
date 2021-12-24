import React from "react";

import "./Body.css";

class Calculet extends React.Component {
  render() {
    return (
      <div className="Calculet">
        <from>
          <div className="calculetFrom">
            <h3>i want</h3>
            <div className="calcRadio">
              <div>
                <input
                  type="radio"
                  name="radioCalc"
                  value="sell"
                  id="radioCalcOne"
                  defaultChecked
                />
                <label htmlFor="radioCalcOne">sell</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="radioCalc"
                  value="buy"
                  id="radioCalcTwo"
                />
                <label htmlFor="radioCalcTwo">buy</label>
              </div>
            </div>
            <div className="CalculetSell">
              <input type="number" id="numInput" name="numInput" />
              <select>
                <option>USD</option>
                <option>RUB</option>
              </select>
            </div>
            <div className="CalculetResult">
              <p>EUR: 150</p>
              <p>EUR: 150</p>
              <p>EUR: 150</p>
              <p>EUR: 150</p>
            </div>
          </div>
        </from>
      </div>
    );
  }
}

export default Calculet;
