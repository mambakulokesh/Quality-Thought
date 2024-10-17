const secondReducer = (state = { b: "---------" }, action) => {
  if (action.type === "B") {
    return {
      b: action.payload,
    };
  }
  return state;
};

export default secondReducer;
