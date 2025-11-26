import React, { Component, useContext } from "react";
import GameOfHuyenTrangUser from "./GameOfHuyenTrangUser";
import { UserContext } from "./UserFuncComponent";

export default function HuyenTrangUser() {
  const { fullname, age, games, increase } = useContext(UserContext);
  return (
    <>
      <h1>User Functional Component</h1>
      <h2 style={{ color: "#bea6bf" }}>Fullname: {fullname}</h2>
      <p>Age: {age}</p>

      <GameOfHuyenTrangUser fullname={fullname} games={games} />

      <button
        onClick={increase}
        style={{ marginLeft: "12px", padding: "5px", backgroundColor: "#bea" }}
      >
        Click to increase my age!
      </button>
    </>
  );
}
