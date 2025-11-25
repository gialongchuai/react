import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    const { onChangeInput, searchBar, inStock } = this.props;
    return (
      <form action="">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search ..."
          onChange={onChangeInput("searchText")}
        />
        <div>
          <input
            type="checkbox"
            name=""
            id=""
            onChange={onChangeInput("inStock")}
          />
          Only show products in stock
        </div>
      </form>
    );
  }
}
