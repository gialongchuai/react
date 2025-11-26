import "./App.css";
import React, { Component } from "react";
import UserClassComponent from "./hook/UserClassComponent";
import UserFuncComponent from "./hook/UserFuncComponent";
import FilterableProductTable from "./product/FilterableProductTable";

export default function App() {
  return (
    <>
      <UserFuncComponent />
      <br />
      <UserClassComponent />
    </>
  );
}
