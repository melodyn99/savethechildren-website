// Polyfill
import 'whatwg-fetch';

import { clone, isFunction } from 'lodash-es';
import qs from 'qs';

import * as Config from '../config';


/**
 * Make request to server API using fetch API. See
 * <https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch>
 * for detail of options parameter and return value.
 * 
 * @param endpoint {string} Endpoint of the API (should be relative url)
 * @param options {object} - Option object passed to fetch API.
 * @param token {string=} - Bearer token of Authorization header
 * @return {Promise<Response>} A Promise that resolves to a Response object.
 */
export function request(endpoint, options, token) {
    let fetchOptions = options;
    if (token != null && token !== '') {
        fetchOptions = clone(options);
        fetchOptions.headers = options.headers ? new Headers(options.headers) : new Headers();
        fetchOptions.headers.set('Authorization', 'Bearer ' + token);
    }
    return fetch(Config.API_URL + endpoint, fetchOptions);
}

// order of token parameter is different from apiFetch and other api* functions
export function apiRequest(method, endpoint, token, params, body, callback, errorCallback) {
    let url = endpoint;
    if (params) {
        url = endpoint + qs.stringify(params, {
            addQueryPrefix: true,
            indices: false
        });
    }

    const headers = new Headers({
        'Accept': 'application/json'
    });
    if (body != null && body !== '') {
        headers.set('Content-Type', 'application/json');
    }

    const fetchResult = request(url, {
        method: method,
        headers: headers,
        body: body
    }, token);
    if (isFunction(callback)) {
        fetchResult.then(r => {
            return r.json().then(data => {
                return callback({ status: r.status, body: data });
            });
        });
    }
    fetchResult.catch(errorCallback);
    return fetchResult;
}

export function apiFetch(endpoint, params, token, callback, errorCallback) {
    apiRequest('GET', endpoint, token, params, undefined, callback, errorCallback);
}

export function apiDelete(endpoint, params, token, callback, errorCallback) {
    apiRequest('DELETE', endpoint, token, params, undefined, callback, errorCallback);
}

export function apiPost(endpoint, body, token, callback, errorCallback) {
    apiRequest('POST', endpoint, token, undefined, body, callback, errorCallback);
}

export function apiPut(endpoint,body, token, callback, errorCallback) {
    apiRequest('PUT', endpoint, token, undefined, body, callback, errorCallback);
}

export const apiGeneral = {
    apiFetch,
    apiDelete,
    apiPost,
    apiPut
};
