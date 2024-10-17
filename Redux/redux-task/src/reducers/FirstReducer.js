const firstReducer = (state = { a: "--------" }, action) => {
  if (action.type === "A") {
    return { 
        a: action.payload 
    };
  }

  return state;
};

export default firstReducer;
