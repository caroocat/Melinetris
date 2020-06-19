const initialState = {
  Content: "",
  Search: "",
  Item: "",
  Filter: "",
  CurrentUrl: "",
  CurrentFilter: "",
  Alert: false,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_CONTENT":
      return { ...state, Content: payload };
    case "SET_SEARCH":
      return { ...state, Search: payload };
    case "GET_ITEM":
      return { ...state, Item: payload };
    case "SWITCH_ALERT":
      return { ...state, Alert: payload };
    case "GET_FILTER":
      return { ...state, Filter: payload };
    case "CURRENT_FILTER":
      return { ...state, CurrentFilter: payload };
    case "CURRENT_URL":
      return { ...state, CurrentUrl: payload };
    default:
      return state;
  }
};
