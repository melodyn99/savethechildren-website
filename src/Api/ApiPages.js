import { apiGeneral } from './_General';

export const apiPages = {

	getPageByRelativePath: (params, token, cb, eCb) => {
		apiGeneral.apiFetch('web_pages', params, token, cb, eCb);
	}
};