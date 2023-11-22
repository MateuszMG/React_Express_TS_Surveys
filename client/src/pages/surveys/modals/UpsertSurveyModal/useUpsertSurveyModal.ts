import { surveyApi } from '../../../../api/surveysApi';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { UseModal } from '../../../../hooks/useModal';

interface useUpsertSurveyModalProps {
  editedSurvey?: Survey;
  handleCloseModal: UseModal['handleClose'];
}

const colors = ['#FF0000', '#00FF00', '#0000FF'];

export const useUpsertSurveyModal = ({
  editedSurvey,
  handleCloseModal,
}: useUpsertSurveyModalProps) => {
  const {
    formState: { errors, isValid, isDirty },
    handleSubmit,
    register,
    reset,
    setValue,
  } = useForm<UpsertSurveySchema>({
    mode: 'onChange',
    resolver: yupResolver(upsertSurveyValidation),
  });

  const handleUpsert = handleSubmit((data: UpsertSurveySchema) => {
    editedSurvey
      ? surveyApi
          .updateSurvey(editedSurvey.id, data)
          .then(() => toast.success('Survey updated successfully'))
          .catch(() => toast.error('Something went wrong'))
          .finally(handleCloseModal)
      : surveyApi
          .createSurvey(data)
          .then(() => toast.success('Survey created successfully'))
          .catch(() => toast.error('Something went wrong'))
          .finally(handleCloseModal);

    return data;
  });

  const setRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    setValue('favouriteColor', colors[index]);
  };

  useEffect(() => {
    if (!editedSurvey) return;

    const { id, ...rest } = editedSurvey;
    reset(rest);
  }, []);

  return {
    errors,
    handleUpsert,
    isDirty,
    isValid,
    register,
    reset,
    setRandomColor,
  };
};

const upsertSurveyValidation = yup.object({
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

export type UpsertSurveySchema = yup.InferType<typeof upsertSurveyValidation>;
