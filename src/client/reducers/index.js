import { ActionTypes } from "../../client/actions";

const initialState = {
  activeMenuItem: "Home"
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.MENU_ITEM_CLICKED:
      return {
        ...state,
        activeMenuItem: action.menuItemSelected
      }
    default:
      return state;
  }
};
export default rootReducer;