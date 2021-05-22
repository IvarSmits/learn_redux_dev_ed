const counterReducter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log(state + action.payload);
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

export default counterReducter;
