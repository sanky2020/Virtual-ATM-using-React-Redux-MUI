const initialState = {
  balance: 1000,
  date: "",
  time: "",
  amount_deposited: "",
  accType: "",
};

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "DEPOSIT":
      return {
        ...state,
        accType: action.type,
        balance: state.balance + Number(action.payload),
        date: action.date,
        time: action.time,
        amount_deposited: action.payload,
        amount: Number(action.payload)
      };

    case "WITHDRAW":
      // return state - Number(action.payload)
      return {
        ...state,
        accType: action.type,
        balance: state.balance - Number(action.payload),
        date: action.date,
        time: action.time,
        amount_deposited: action.payload,
        amount: Number(action.payload)
      };

    default:
      return state;
  }
};
export default reducer;
