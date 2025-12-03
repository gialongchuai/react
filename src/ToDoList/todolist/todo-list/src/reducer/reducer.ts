import { Type } from "./action";

export const arg = { age: 18 };

const reducer = (state: typeof arg, action: Type) => {
  // có thể sử dụng switch case return ko cần break
  // default là throw Error

  if (action.key === "increase_me") {
    // không nên như này
    // state.age = state.age + 1; // không nên mutate gì gì đó
    return {
      ...state,
      age: state.age + 1,
    };
  }
  if (action.key === "decrease_me") {
    return {
      ...state,
      age: state.age - 1,
    };
  }
  if (action.key === "increase_x_me") {
    return {
      ...state,
      age: state.age + action.payload,
    };
  }
  throw Error("Error action", action);
};

export default reducer;