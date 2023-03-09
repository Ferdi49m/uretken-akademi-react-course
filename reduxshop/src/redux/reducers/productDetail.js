export const productsDetailReducer = (state = { product: {} }, action) => {
    switch (action.type) {
      case "GET_DETAILS":
        return {
            //TÜM STATELERİ DÖNER
            ...state,
          product: action.payload,
        };
  
      default:
        return state;
    }
  };
  