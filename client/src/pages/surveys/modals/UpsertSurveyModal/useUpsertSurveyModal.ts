import { surveyApi } from '../../../../api/surveysApi';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface useUpsertSurveyModalProps {
  editedSurvey?: Survey;
}

export const useUpsertSurveyModal = ({
  editedSurvey,
}: useUpsertSurveyModalProps) => {
  const {
    formState: { errors, isValid, isDirty },
    handleSubmit,
    register,
    reset,
  } = useForm<UpsertSurveySchema>({
    mode: 'onChange',
    resolver: yupResolver(upsertSurveyValidation),
  });

  // TODO: add error handling
  const handleUpsert = handleSubmit((data: UpsertSurveySchema) => {
    editedSurvey
      ? surveyApi.updateSurvey(editedSurvey.id, data)
      : surveyApi.createSurvey(data);

    return data;
  });

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
  };
};

// TODO: implement validation ( colorPicker, radio )
const upsertSurveyValidation = yup.object({
  title: yup.string().required().min(3).max(64).label('Title'),
  age: yup.number().required().max(120).integer().min(1).label('Age'),
  hight: yup.number().required().min(80).max(220),
  favouriteColor: yup.string().required().label('Favourite color'),
  sex: yup.string().required().min(4).max(6, 'Sex'),
});

export type UpsertSurveySchema = yup.InferType<typeof upsertSurveyValidation>;
