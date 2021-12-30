import React from "react";

import "./Body.css";

class ItemsRate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: "",
      name: "",
      arr: {},
    };
    this.state.price = this.props.all.rates;
  }

  render() {
    return (
      <div className="bodyItems">
        {Object.keys(this.state.price).map((e, i) => {
          return (
            <div key={i} className="item">
              <div>{e}</div>
              <div>
                <div>{this.props.all.base}</div>
                <div>{this.state.price[e].toFixed(2)}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ItemsRate;

