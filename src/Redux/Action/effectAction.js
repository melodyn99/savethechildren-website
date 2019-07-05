import * as EffectActionTypes from '../Constant/ActionType';

export const mainMenuMouseOver = (data) => ({
  type: EffectActionTypes.MAIN_MENU_MOUSE_OVER,
  data
});

export const mainMenuMouseLeave = (data) => ({
  type: EffectActionTypes.MAIN_MENU_MOUSE_LEAVE,
  data
});
