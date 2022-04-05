const initialState = {
  cartItems: [],
  totalPrice: 0,
};
const cartItems = (state = initialState, action) => {
  switch (action.type) {
    case "SETCARTITEM":
      const theItem = state.cartItems.find(
        product => product.name === action.payload.name,
      );
      if (theItem) {
        return {
          ...state,
          cartItems: [...state.cartItems],
          totalPrice: state.totalPrice + action.payload.original_price,
          
        };
      }
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
    
    default:
      return state;
  }
};

export default cartItems;
