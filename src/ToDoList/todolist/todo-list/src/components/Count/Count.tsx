import React, { useEffect, useReducer, useState } from "react";
import reducer, { arg } from "../../reducer/reducer";
import { decreaseAgeAction, increaseAgeAction, increaseXAgeAction } from "../../reducer/action";

export default function Count() {
  // nhớ commend code lại kẻo không biết count hay state với tuổi giao diện luôn
  // có thể tham khảo chuyển thành func rồi truyền thêm payload cho mỗi lần gọi button

  //   const [count, setCount] = useState<{ age: number }>({ age: 18 });

  // useEffect(() => { // useEffect khi lên 4 chớp nhẹ
  //     // trên trình duyệt rồi paint thành 0
  //     // => khắc phục dùng useLayoutEffect thì thành 0 luôn nếu đạt === 4
  //     if(count === 4)
  //         setCount((pre) => pre = 0)
  // }, [count])
  const [state, dispatch] = useReducer(reducer, arg);

  //   const increaseClick = () => {
  //     setCount((pre) => ({
  //       ...pre,
  //       age: pre.age + 1,
  //     }));
  //   };
  //   const decreaseClick = () => {
  //     setCount((pre) => ({
  //       ...pre,
  //       age: pre.age - 1,
  //     }));
  //   };
  return (
    <>
      <h1>Count: {state.age}</h1>
      <br></br>
      {/* <button onClick={increaseClick}>Click to increase me!</button>
      <button onClick={decreaseClick}>Click to decrease me!</button> */}
      <br />
      <button onClick={() => dispatch(increaseAgeAction())}>
        Click to tang me!
      </button>
      <button onClick={() => dispatch(decreaseAgeAction())}>
        Click to giam me!
      </button>

      <br></br>
      <button onClick={() => dispatch(increaseXAgeAction(5))}>
        Click to tang me!
      </button>
    </>
  );
}
