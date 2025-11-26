import React, { Component, useEffect, useState } from "react";

// useState với setState bên class khác nhau 
// setStatus có thể thay đổi field mà không ảnh hưởng ví dụ:
// {
//   name: '',
//   address: ''
// }
// setState({address: new}) -> thì name vẫn giữ nguyên nhưng với ông useState thì phải viết rõ ràng ra kẻo 
// mất field khác ví dụ
// setAge(preAge => preAge + 1) => nhớ là dùng arrow func để lấy state của tuổi mới nhất
// setAge(age + 1) => là ghi đè state cũ chứ không phải cập nhật giá trị mới nhất của field trong quá trình
// thay đổi do người khác (race condition) => tức là không có arrow func thì dùng field cũ lưu ban đầu trong state closure

// chú 2 cái setGames reRender

const handleChangeGame = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        csgo: {
          name: "Csgo",
          level: 20,
          nick_name: "cunniuai z",
        },
      });
    }, 3000);
  });
};

export default function UserFuncComponent() {
  // hook chỉ dùng được trong functional component
  const [fullname, setFullname] = useState("Huyền Trang");
  const [age, setAge] = useState(18);
  const [, setReRender] = useState(0);
  const onChangeReRender = () => {
    console.log('Re-render!')
    return setReRender((pre) => pre + 1);
  };
  
  // nếu không truyền phía sau thì chạy lại mỗi khi re render
  useEffect(() => {
    console.log('useEffect giống componentDidUpdate, chạy khi component re-render!!!');
  })

  // nếu truyền có [] phía sau
  // nghe nói đâu chạy như componentDidMount bên class component: hình như chạy đúng 1 lần duy nhất á.
  useEffect(() => {
    handleChangeGame().then((res) => {
      setGames((pre) => ({
        ...pre,
        ...res,
      }));
    });
  }, []);

  const [games, setGames] = useState({
    // có thể obj này trong func ngoài class
    valorant: {
      // để return về 1 object cũng được -> sau đó gọi useState(initialGames); chỉ tên func mà thôi.
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
  setGames(prevGames => {
    const oldCharacter = prevGames.lmht.best_character;
    const newCharacter = oldCharacter === "Soraka!!!" ? "Aya!!!" : "Soraka!!!";
    return {
      ...prevGames,
      lmht: {
        ...prevGames.lmht,
        best_character: newCharacter,
      }
    };
  });
};

  const increase = () => setAge((age) => age + 1);

  return (
    <div>
      <h1>User Functional Component</h1>
      <h2 style={{ color: "#bea6bf" }}>Fullname: {fullname}</h2>
      <p>Age: {age}</p>
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

      <button
        onClick={increase}
        style={{ marginLeft: "12px", padding: "5px", backgroundColor: "#bea" }}
      >
        Click to increase my age!
      </button>
      <button
        onClick={onChange}
        style={{ marginLeft: "12px", padding: "5px", backgroundColor: "#bea" }}
      >
        Click me to change best character in lmht game!
      </button>
      <button
        onClick={onChangeReRender}
        style={{ marginLeft: "12px", padding: "5px", backgroundColor: "#bea" }}
      >
        Re-Render
      </button>
    </div>
  );
}
