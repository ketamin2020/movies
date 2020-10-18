import React, { Component } from "react";
export default class SearchForm extends Component {
  state = {
    value: "",
  };

  heandleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  heandleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <form onSubmit={this.heandleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.heandleChange}
        ></input>
        <button type="submit">Search movie</button>
      </form>
    );
  }
}
