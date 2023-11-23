import { Request, Response } from 'express';
import { upsertSurveyValidation } from '../validations/surveys.validation';
import { surveyModel } from '../models/survey.model';
import { idValidation } from '../validations/global.validation';

export const surveysController = {
  getSurveys: async (req: Request, res: Response) => {
    try {
      const surveys = surveyModel.get();

      return res.json({ surveys });
    } catch (error) {
      return error;
    }
  },

  createSurvey: async (req: Request, res: Response) => {
    try {
      const survey = await upsertSurveyValidation.validate(req.body);

      surveyModel.create(survey);

      return res.sendStatus(201);
    } catch (error) {
      return error;
    }
  },

  updateSurvey: async (req: Request, res: Response) => {
    try {
      const survey = await upsertSurveyValidation.validate(req.body);
      const { id } = await idValidation.validate(req.params);

      surveyModel.update({ id, ...survey });

      return res.sendStatus(200);
    } catch (error) {
      return error;
    }
  },

  deleteSurvey: async (req: Request, res: Response) => {
    try {
      const { id } = await idValidation.validate(req.params);

      surveyModel.delete(id);

      return res.sendStatus(204);
    } catch (error) {
      return error;
    }
  },
};
