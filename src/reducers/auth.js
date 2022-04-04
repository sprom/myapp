const auth = (state = true, action) => {
  switch (action.type) {
    case "SETAUTH":
        state = action.payload ;
      return state;
    default:
      return state;
  }
}

export default auth;
