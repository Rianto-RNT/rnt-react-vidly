import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // call the server
    const username = this.username.current.value;
  };

  handleChange = (e) => {
    const account = { ...this.state.account };

    account.username = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <>
        <h3>Login</h3>
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  value={this.state.account.username}
                  onChange={this.handleChange}
                  id="username"
                  type="email"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input id="password" type="password" className="form-control" />
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default LoginForm;
