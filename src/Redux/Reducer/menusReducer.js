import * as MenusActionTypes from '../Constant/ActionType';
// import { clearLoginData } from '../../Util/AuthService';

const initialState = {
	allMenus: []
};

const menusReducer = (state = initialState, action) => {

	switch (action.type) {

		case MenusActionTypes.GET_ALL_MENUS: {
			return {
				...state,
				allMenus: action.data
			}
		}

		default:
			return state;
	}
};

export default menusReducer;
