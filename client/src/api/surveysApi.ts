import { axios } from './axios';

export const surveyApi = {
  getSurveys: axios.get('/surveys'),
  createSurvey: axios.post('/surveys'),
  updateSurvey: (id: string) => axios.put(`/surveys/${id}`),
  deleteSurvey: (id: string) => axios.delete(`/surveys/${id}}`),
};
