import { Survey } from '../models/survey';

const maxAge = 120;
const minAge = 0;
const maxHeight = 220;
const minHeight = 40;

const createDefaultSurvey = (id: number): Survey => ({
  age: Math.round(Math.random() * (maxAge - minAge) + minAge),
  favouriteColor: 'green',
  hight: Math.round(Math.random() * (maxHeight - minHeight) + minHeight),
  id: id.toString(),
  sex: !!((Math.random() * 10) % 2) ? 'male' : 'female',
  title: `Title: ${id}`,
});

export const defaultSurveys = Array(6)
  .fill(0)
  .map((_, id) => createDefaultSurvey(id));
