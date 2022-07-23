import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

   handleIncrement() {
    console.log('Increment Clicked', this)
  }

  render() {
    return (
      <div>
        <span style={{ color: "#222222" }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button onClick={this.handleIncrement} className="btn btn-primary btn-sm">Increment</button>
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
