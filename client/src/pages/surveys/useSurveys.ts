import { useState } from 'react';
import { useModal } from '../../hooks/useModal';

export const useSurveys = () => {
  const upsertSurveyModal = useModal();
  const deleteSurveyModal = useModal();

  const [editedSurvey, setEditedSurvey] = useState<Survey>();

  const handleOpenDeleteSurveyModal = (survey: Survey) => {
    setEditedSurvey(survey);
    deleteSurveyModal.handleOpen();
  };

  const handleOpenUpsertSurveyModal = (survey: Survey) => {
    setEditedSurvey(survey);
    upsertSurveyModal.handleOpen();
  };

  return {
    deleteSurveyModal,
    editedSurvey,
    handleOpenDeleteSurveyModal,
    handleOpenUpsertSurveyModal,
    upsertSurveyModal,
  };
};
