const MENU_ITEM_CLICKED = "MENU_ITEM_CLICKED";

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