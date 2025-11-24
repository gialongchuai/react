import React, { Component } from "react";

const productList = [
  {
    "category": "Sporting Goods",
    "price": "$49.99",
    "stocked": true,
    "name": "Football"
  },
  {
    "category": "Sporting Goods",
    "price": "$9.99",
    "stocked": true,
    "name": "Baseball"
  },
  {
    "category": "Sporting Goods",
    "price": "$29.99",
    "stocked": false,
    "name": "Basketball"
  },
  {
    "category": "Electronics",
    "price": "$99.99",
    "stocked": true,
    "name": "iPod Touch"
  },
  {
    "category": "Electronics",
    "price": "$399.99",
    "stocked": false,
    "name": "iPhone 5"
  },
  {
    "category": "Electronics",
    "price": "$199.99",
    "stocked": true,
    "name": "Nexus 7"
  }
]

const category = new Map();
productList.forEach((product) => {
    if(!category.has(product.category)) {
       category.set(product.category, []); 
    }

    category[product.category] = {
        name: product.name,
        price: product.price
    }
} );
category.forEach(()=> console.log(category.keys))


export default class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <form action="">
          <input type="text" name="" id="" placeholder="Search ..." />
          <div>
            <input type="checkbox" name="" id="" />
            Only show products in stock
          </div>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colSpan={2}>Sporting Goods</th>
              </tr>
              <tr>
                <td>Football</td>
                <td>49.99</td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
