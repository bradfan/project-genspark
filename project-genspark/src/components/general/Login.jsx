import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    props;
    this.state = {
      password: this.props.password,
    };
  }
  render() {
    return (
      <div className="container">
        <div className="box">
          <input
            className="login-input"
            type="text"
            placeholder="Please enter your password"
          ></input>
          <button className="btn login-submit" onClick={this.props.password}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
export default Login;
