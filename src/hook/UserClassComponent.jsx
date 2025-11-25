import React, { Component } from "react";

export default class UserClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "Minh Thu",
      age: 18,
    };
  }

  increase = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };

  render() {
    const { fullname, age } = this.state;
    return (
      <div>
        <h1>User Class Component</h1>
        <h2 style={{ color: "#bea6bf" }}>Fullname: {fullname}</h2>
        <p>Age: {age}</p>

        <button style={{ marginLeft: "12px", padding: "5px", backgroundColor: "#bea"}} onClick={this.increase}>Click to increase my age!</button>
      </div>
    );
  }
}
