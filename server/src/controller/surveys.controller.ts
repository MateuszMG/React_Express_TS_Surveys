import { Request, Response } from 'express';
import {
  createSurveyValidation,
  deleteSurveyValidation,
  updateSurveyValidation,
} from '../validations/survey.svalidation';
import { surveyModel } from '../models/survey.model';

export const surveysController = {
  get: async (req: Request, res: Response) => {
    try {
      const surveys = surveyModel.get();

      return res.json({ surveys });
    } catch (error) {
      return error;
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const survey = await createSurveyValidation.validate(req.body);

      surveyModel.create(survey);

      return res.sendStatus(201);
    } catch (error) {
      return error;
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const survey = await updateSurveyValidation.validate(req.body);

      surveyModel.update(survey);

      return res.sendStatus(200);
    } catch (error) {
      return error;
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { id } = await deleteSurveyValidation.validate(req.body);

      surveyModel.delete(id);

      return res.sendStatus(204);
    } catch (error) {
      return error;
    }
  },
};
