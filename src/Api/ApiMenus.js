import { apiGeneral } from './_General';

export const apiMenus = {

	// REAL
	getAllMenus: (params, token, cb, eCb) => {
		apiGeneral.apiFetch('all_menus', params, token, cb, eCb);
	}
};