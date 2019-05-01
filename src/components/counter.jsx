import React, { Component } from "react";
// import "../../bootstrap/dist/css/bootstrap.css";
class Counter extends Component {
  // state = { counter: 0, tags: ["tag1", "tag2", "tag3"] };
  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.value)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.value)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const counter = this.props.value;
    return counter === 0 ? "Zero" : counter;
  }
}

export default Counter;
