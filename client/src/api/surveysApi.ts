import { axios } from './axios';

export const surveyApi = {
  getSurveys: () => axios.get('/surveys'),

  createSurvey: (data: Omit<Survey, 'id'>) => axios.post('/surveys', data),

  updateSurvey: (id: string) => axios.put(`/surveys/${id}`),

  deleteSurvey: (id: string) => axios.delete(`/surveys/${id}}`),
};
