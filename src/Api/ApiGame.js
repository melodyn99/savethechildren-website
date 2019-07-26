import { apiGeneral } from './_General';

export const apiGame = {

	getGameData: (params, token, cb, eCb) => {
		apiGeneral.apiFetch('user_data', params, token, cb, eCb);
    },
    
    updateGameData: (gameId, data, token, cb, eCb) => {
        if (gameId == null) {
            if (eCb) {
                eCb(new Error('gameId is not provided'));
            }
        } else {
            apiGeneral.apiPost(`user_data/${gameId}`, data, token, cb, eCb);
        }
    },

    getLeaderBoardData: (token, cb, eCb) => {
        apiGeneral.apiFetch('leader_board', null, token, cb, eCb);
    }
};
