import React, { Component, useContext } from "react";
import { UserContext } from "./UserFuncComponent";

export default function GameOfHuyenTrangUser() {
    const {fullname, games} = useContext(UserContext);
    return (
    <div>
      {" "}
      List game của {fullname}:
      <ul>
        {Object.entries(games).map(([gameName, gameData]) => (
          <li key={gameName}>
            <strong>{gameData.name}</strong>: {gameData.nick_name} (Level{" "}
            {gameData.level})
            {gameData.best_character && ` - Best: ${gameData.best_character}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
