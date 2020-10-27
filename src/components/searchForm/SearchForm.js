import React, { Component } from "react";
import styles from "../searchForm/searchForm.module.css";
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
      <div className={styles.group}>
        <form onSubmit={this.heandleSubmit}>
          <input
            type="text"
            value={this.state.value}
            required
            onChange={this.heandleChange}
          ></input>
          <span className={styles.bar}></span>
          <label>Search Contact </label>
          <button className={styles.btnBack} type="submit">
            Search movie
          </button>
        </form>
      </div>
    );
  }
}
