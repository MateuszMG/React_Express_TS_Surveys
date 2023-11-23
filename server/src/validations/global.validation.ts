import * as yup from 'yup';

export const idValidation = yup.object({
  id: yup.string().required().min(3).max(40).label('Id'),
});
