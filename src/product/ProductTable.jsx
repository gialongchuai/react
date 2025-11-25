import React, { Component } from "react";
import ProductRow from "./ProductRow";
import { ProductCategoryRow } from "./ProductCategoryRow";

export default class ProductTable extends Component {
  render() {
    const { productList, searchBar, inStock } = this.props;

    const grouped = productList.reduce((acc, product) => {
      const matchesStock = inStock ? product.stocked : true;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchBar.toLowerCase());

      if (!matchesStock || !matchesSearch) {
        return acc;
      }

      const { category } = product;
      if (!acc[category]) acc[category] = [];
      acc[category].push({ name: product.name, price: product.price });

      return acc;
    }, {});

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(grouped).map(([category, products]) => (
            <React.Fragment key={category}>
              <ProductCategoryRow category={category} />
              {products.map((product) => (
                <ProductRow key={product.name} product={product} />
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    );
  }
}
