import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-3"
        >
          Reset
        </button>
        {this.props.counters.map(tag => (
          <Counter
            key={tag.id}
            value={tag.value}
            onIncrement={() => this.props.onIncrement(tag)}
            onDelete={() => this.props.onDelete(tag.id)}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
