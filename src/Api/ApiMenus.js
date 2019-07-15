import { apiGeneral } from './_General';

export const apiMenus = {

	// REAL
	getAllMenus: (url, params, token, cb, eCb) => {
		apiGeneral.apiFetch(url, params, token, cb, eCb);
	}
};