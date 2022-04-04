const initialState = {
  cartItems: [],
  totalPrice: 0,
};
const cartItems = (state = initialState, action) => {
  switch (action.type) {
    case "SETCARTITEM":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        totalPrice: state.totalPrice + action.payload.original_price,
      };
    case "DELCARTITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem !== action.payload
        ),
        totalPrice: state.totalPrice - action.payload.original_price,
      };
    // case CLEAR_CART:
    //   return {...initialState};
    default:
      return state;
  }
};

export default cartItems;
