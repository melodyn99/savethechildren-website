import * as MenusActionTypes from '../Constant/ActionType';

export const getAllMenus = (data) => ({
    type: MenusActionTypes.GET_ALL_MENUS,
    data
  })