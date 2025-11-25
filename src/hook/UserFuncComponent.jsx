import React, { Component, useState } from "react";

export default function UserFuncComponent() { // hook chỉ dùng được trong functional component
  const [fullname, setFullname] = useState("Huyền Trang");
  const [age, setAge] = useState(18);

  const [games, setGames] = useState({ // có thể obj này trong func ngoài class
    valorant: { // để return về 1 object cũng được -> sau đó gọi useState(initialGames); chỉ tên func mà thôi.
      name: "valorant",
      level: 12,
      nick_name: "cucniu",
    },
    lienquan: {
      name: " Liên quân",
      level: 12,
      nick_name: "cucniu",
    },
    lmht: {
      name: "Liên minh huyền thọai",
      level: 18,
      nick_name: "cunniuai",
      best_character: "Soraka!!!",
    },
  });

  const onChange = () => {
    const oldCharacter = games.lmht.best_character;
    const newCharacter = oldCharacter === "Soraka!!!" ? "Aya!!!" : "Soraka!!!";
    setGames({
      ...games,
      lmht: {
        ...games.lmht,
        best_character: newCharacter,
      },
    });
  };

  const increase = () => setAge(age + 1);

  return (
    <div>
      <h1>User Functional Component</h1>
      <h2 style={{ color: "#bea6bf" }}>Fullname: {fullname}</h2>
      <p>Age: {age}</p>
      <p>
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
      </p>

      <button onClick={increase} style={{ marginLeft: "12px", padding: "5px", backgroundColor: "#bea"}}>Click to increase my age!</button>
      <button onClick={onChange} style={{ marginLeft: "12px", padding: "5px", backgroundColor: "#bea"}}>
        Click me to change best character in lmht game!
      </button>
    </div>
  );
}
