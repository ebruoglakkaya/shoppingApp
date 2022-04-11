const INITIAL_STATE = {
    boxBasket: [],
  };
  
  const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          boxBasket: action.payload,
        };     
      default:
        return state;
    }
  };
  
  export default userReducer;