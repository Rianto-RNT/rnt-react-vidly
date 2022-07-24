import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <h4>{this.props.id}</h4>
        <span style={{ color: "#222222" }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={(product) => this.handleIncrement(product)}
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
