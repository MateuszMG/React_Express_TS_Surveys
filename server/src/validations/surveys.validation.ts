import * as yup from 'yup';

export const upsertSurveyValidation = yup.object({
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
});
