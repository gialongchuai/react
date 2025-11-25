import React, { Component } from "react";
import "./FilterableProductTable.css";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { isInaccessible } from "@testing-library/dom";

const productList = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  {
    category: "Electronics",
    price: "$199.99",
    stocked: true,
    name: "Nexus 7",
  },
];

const fecthApi = () => Promise.resolve(productList);

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      searchBar: '',
      inStock: false
    }
  }

  componentDidMount() { // hình như là chạy sau constructor
    fecthApi().then((res) => {
      this.setState({
        productList: res
      })
    })
  }

  handleOnChange = (value) => (event) => {
    if(value === 'searchText') {
      this.setState({
        searchBar: event.target.value
      })
    } else if(value === 'inStock') {
      this.setState({
        inStock: event.target.checked
      })
    }
  }


  render() {
    const {productList, searchBar, inStock} = this.state;

    return (
      <div className="product">
        <SearchBar onChangeInput={this.handleOnChange} searchBar={searchBar} inStock={inStock} />
        <ProductTable productList={productList} searchBar={searchBar} inStock={inStock}/>
      </div>
    );
  }
}
