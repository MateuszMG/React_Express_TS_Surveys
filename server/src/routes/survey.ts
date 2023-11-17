import express from 'express';
import { surveysController } from '../controller/surveys';

const surveysRouter = express.Router();

surveysRouter.get('/', surveysController.get);
surveysRouter.post('/', surveysController.create);
surveysRouter.put('/:id', surveysController.update);
surveysRouter.delete('/:id', surveysController.delete);

export { surveysRouter };
