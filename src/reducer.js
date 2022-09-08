
export const initialState = {
  basket: [],
  //store the user in the react context api
  user: null,
};

//selector - really highly used
//professional practice to put the selector function in the reducer
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) =>item.price + amount, 0);
//add item.price to the total amount with the initial amount being 0

//pulling stuff from the data layer is easy but the for the pushing part, reducer comes into play
const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state, 
        // return everything that is currently inside the state
        basket: [...state.basket, action.item],
      };
      //LISTEN TO THE ACTION
      case "REMOVE_FROM_BASKET" :
        const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
        let newBasket = [...state.basket]

        if(index >= 0) {
          newBasket.splice(index, 1);
        }
        else {
          console.warn(`Cant remove product such that (id : ${action.id}) as its not in the basket`)
        }
        return {
          ...state,
          basket : newBasket,
        };
      case 'SET_USER' :
        return {
          ...state,
          user : action.user
        };
    default:
      return state;
  }
};

export default reducer;
