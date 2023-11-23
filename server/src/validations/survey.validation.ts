import * as yup from 'yup';

const surveyValidation = {
  title: yup.string().required().min(3).max(128).label('Title'),
  age: yup.number().required().max(120).min(0).integer().label('Age'),
  hight: yup.number().required().min(40).max(220).integer().label('Hight'),
  favouriteColor: yup
    .string()
    .required()
    .matches(/^#[0-9A-Fa-f]{6}$/, 'Invalid color format')
    .label('Favourite color'),
  sex: yup
    .string()
    .required()
    .lowercase()
    .oneOf(['male', 'female'])
    .label('Sex'),
};

export const createSurveyValidation = yup.object({
  ...surveyValidation,
});

export const updateSurveyValidation = yup.object({
  id: yup.string().required().min(3).max(40).label('Id'),
  ...surveyValidation,
});

export const deleteSurveyValidation = yup.object({
  id: yup.string().required().min(3).max(40).label('Id'),
});
