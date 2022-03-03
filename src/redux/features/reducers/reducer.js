export const musicList = (state = "you do not have any choose", action) => {
  switch (action.type) {
    case "LIST":
      return action.payload;
    default:
      return state;
  }
};
