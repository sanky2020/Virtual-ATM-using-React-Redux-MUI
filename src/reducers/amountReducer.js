const initialState = {
  balance: 1000,
  date: "",
  time: "",
  amount: "",
  accType: "",
  statementList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return {
        accType: action.type,
        balance: state.balance + Number(action.payload),
        date: action.date,
        time: action.time,
        amount: Number(action.payload),
        statementList: [
          ...state.statementList,
          {
            accType: action.type,
            balance: state.balance + Number(action.payload),
            date: action.date,
            time: action.time,
            amount: Number(action.payload),
          },
        ],
      };

    case "WITHDRAW":
      // return state - Number(action.payload)
      return {
        accType: action.type,
        balance: state.balance - Number(action.payload),
        date: action.date,
        time: action.time,
        amount: Number(action.payload),
        statementList: [
          ...state.statementList,
          {
            accType: action.type,
            balance: state.balance - Number(action.payload),
            date: action.date,
            time: action.time,
            amount: Number(action.payload),
          },
        ],
      };

    default:
      return state;
  }
};
export default reducer;
