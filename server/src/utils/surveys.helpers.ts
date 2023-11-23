import { Survey } from '../models/survey.model';

const maxAge = 120;
const minAge = 0;
const maxHeight = 220;
const minHeight = 40;
const colors = ['#FF0000', '#00FF00', '#0000FF'];

const createDefaultSurvey = (): Survey => {
  const index = Math.floor(Math.random() * colors.length);
  const id = Math.random().toString().slice(2, 12);

  return {
    age: Math.round(Math.random() * (maxAge - minAge) + minAge),
    favouriteColor: colors[index],
    hight: Math.round(Math.random() * (maxHeight - minHeight) + minHeight),
    id,
    sex: !!((Math.random() * 10) % 2) ? 'male' : 'female',
    title: `Title: ${id}`,
  };
};

export const defaultSurveys = Array(6)
  .fill(0)
  .map(() => createDefaultSurvey());
