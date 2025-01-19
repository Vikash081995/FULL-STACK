import { createStore, combineReducers } from "redux";
import applyMiddleware from "../../../react-cc/node_modules/redux/src/applyMiddleware";
import reduxLogger from "redux-logger";

//Action

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

//ActionCreator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "First Redux",
  };
}

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(reduxLogger.createLogger())
);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});
store.dispatch(buyCake());
store.dispatch(buyIceCream());
unsubscribe();
