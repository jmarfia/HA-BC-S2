export const reducer = (state, action) => {
  switch (action.type) {
    case "RESOLVE_STEP":
      return  state + action.payload;
      case "UPDATE_STEP":
        return  action.payload;
    default:
      return state;
  }
};
