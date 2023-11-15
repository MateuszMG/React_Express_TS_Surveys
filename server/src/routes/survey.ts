import express from 'express';
import { surveysController } from '../controller/surveys';

const surveysRouter = express.Router();

surveysRouter.get('/', surveysController.getSurveys);
surveysRouter.post('/', surveysController.createSurvey);
surveysRouter.put('/', surveysController.updateSurvey);
surveysRouter.delete('/', surveysController.deleteSurvey);

export { surveysRouter };
