import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    let classes = this.getBadgeClasses();

    return (
      <div>
        <span style={{ color: "#222222" }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-primary btn-sm">Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
