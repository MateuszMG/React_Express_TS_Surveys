import express from 'express';
import { surveysController } from '../controller/surveys.controller';

const surveysRouter = express.Router();

surveysRouter.get('/', surveysController.getSurveys);
surveysRouter.post('/', surveysController.createSurvey);
surveysRouter.put('/:id', surveysController.updateSurvey);
surveysRouter.delete('/:id', surveysController.deleteSurvey);

export { surveysRouter };
