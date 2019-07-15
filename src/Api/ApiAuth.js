import { api } from './_ApiFactoryWithHeader';
import { AUDIENCE, WEB_CLIENT_CREDENTIAL_TOKEN } from '../Redux/Constant/ServerConstant';

import { apiGeneral } from './_General';

export const apiAuth = {
  authenticate: (username, password) => api.postUrlFormEncoded('auth', {
    username, password, audience: AUDIENCE, grant_type: 'password',
    }, { headers: { 
    'Authorization': `Basic ${WEB_CLIENT_CREDENTIAL_TOKEN}`,
    'Access-Control-Allow-Origin': '*', } } ),

  // REAL
  getUserInformation: (params, token, cb, eCb) => {
    apiGeneral.apiFetch('user/me', params, token, cb, eCb);
  },

  refreshTokenByRefreshToken: (token, cb, eCb) => {
    // console.log('refresh_token2 : ', token);

    apiGeneral.apiPostRefreshToken('auth', {
      headers: {
        'Authorization': `Basic ${WEB_CLIENT_CREDENTIAL_TOKEN}`,
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',

      }
    }, token, cb, eCb);
  }
};
