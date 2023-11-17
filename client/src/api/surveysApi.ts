import { axios } from './axios';
import { UpsertSurveySchema } from '../pages/surveys/modals/UpsertSurveyModal/useUpsertSurveyModal';

export const surveyApi = {
  getSurveys: () => axios.get('/surveys'),

  createSurvey: (data: UpsertSurveySchema) => axios.post('/surveys', data),

  updateSurvey: (id: string, data: UpsertSurveySchema) =>
    axios.put(`/surveys/${id}`, data),

  deleteSurvey: (id: string) => axios.delete(`/surveys/${id}`),
};
