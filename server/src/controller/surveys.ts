import { Request, Response } from 'express';
import { surveyModel } from '../models/survey';

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
      surveyModel.create(req.body);

      return res.sendStatus(201);
    } catch (error) {
      return error;
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      surveyModel.update({
        id: req.params.id,
        ...req.body,
      });

      return res.sendStatus(200);
    } catch (error) {
      return error;
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      surveyModel.delete(req.params.id);

      return res.sendStatus(204);
    } catch (error) {
      return error;
    }
  },
};
