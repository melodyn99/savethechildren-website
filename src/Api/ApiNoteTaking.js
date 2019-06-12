import { api } from './_ApiFactoryWithHeader';

import { apiFetch, apiPost } from './_General';

export const apiNoteTaking = {

  getNoteTakingList: (params, token, cb, eCb) => {
    apiFetch('notes', params, token, cb, eCb)
  },

  getNoteTakingDefail: noteId => api.get(`notes/${noteId}`),

  // createNoteTaking: data => api.post('notes', data),
  createNoteTaking: (body, token, cb, eCb) => {
    apiPost('notes', body, token, cb, eCb)
  },

  editNoteTaking: (noteId, data) => api.put(`notes/${noteId}`, data),

  deleteNoteTaking: noteId => api.delete(`notes/${noteId}`),
};
