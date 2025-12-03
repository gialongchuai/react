type IncreaseMeType = { key: "increase_me" };
type DecreaseMeType = { key: "decrease_me" };
type IncreaseXMeType = { key: "increase_x_me"; payload: number };

export type Type = IncreaseMeType | DecreaseMeType | IncreaseXMeType;

export const increaseAgeAction = () => {
  return { key: "increase_me" } as IncreaseMeType;
};

export const decreaseAgeAction = () => {
  return { key: "decrease_me" } as DecreaseMeType;
};

export const increaseXAgeAction = (payload: number) => {
  return { key: "increase_x_me", payload } as IncreaseXMeType;
};