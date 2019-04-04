const MENU_ITEM_CLICKED = "MENU_ITEM_CLICKED";
const REDUX_ROUTER_ROUTE_CHANGED_ACTION = "@@router/LOCATION_CHANGE";

function menuItemClickedAction(menuItemSelected) {
  return {
    type: MENU_ITEM_CLICKED,
    menuItemSelected: menuItemSelected
  }
}

export const Actions = {
  menuItemClickedAction
};

export const ActionTypes = {
  MENU_ITEM_CLICKED
}