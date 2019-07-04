import * as EffectActionTypes from '../Constant/ActionType';

const initialState = {
	heroMenu: {
		about: false,
		resource: false,
		featured: false,
		research: false,
		event: false,
		external: false
	}
};

const effectReducer = (state = initialState, action) => {

	switch (action.type) {

		case EffectActionTypes.MAIN_MENU_MOUSE_OVER: {
			return {
				...state,
				heroMenu: {
					...state.heroMenu,
					[action.data]: true
				}
			}
		}

		case EffectActionTypes.MAIN_MENU_MOUSE_LEAVE: {
			return {
				...state,
				heroMenu: {
					...state.heroMenu,
					[action.data]: false
				}
			}
		}

		default:
			return state;
	}
};

export default effectReducer;
