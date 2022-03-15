// const INITIAL_STATE = {`

//     counter : 0,

// }`

const counterReducer = (counter = 0, action) => {
  if (action.type === "COUNTER_PLUS") {
    return (counter = ++counter);
  } else if (action.type === "COUNTER_MINUS") {
    return (counter = --counter);
  } else {
    return counter;
  }
};

export { counterReducer };
