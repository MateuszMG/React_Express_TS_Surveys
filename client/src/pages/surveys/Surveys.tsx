import { Button } from '../../components/global/Button/Button';
import { DeleteSurveyModal } from './modals/DeleteSurveyModal/DeleteSurveyModal';
import { SurveysList } from './list/SurveysList';
import { UpsertSurveyModal } from './modals/UpsertSurveyModal/UpsertSurveyModal';
import { useSurveys } from './useSurveys';
import styles from './Surveys.module.css';

export const Surveys = () => {
  const {
    deleteSurveyModal,
    editedSurvey,
    handleOpenDeleteSurveyModal,
    handleOpenUpsertSurveyModal,
    upsertSurveyModal,
  } = useSurveys();

  return (
    <main>
      <header className={styles.header}>
        <h1>Surveys</h1>
        <Button onClick={upsertSurveyModal.handleOpen}>Add survey</Button>
      </header>

      <SurveysList
        handleOpenDeleteSurveyModal={handleOpenDeleteSurveyModal}
        handleOpenUpsertSurveyModal={handleOpenUpsertSurveyModal}
      />

      {upsertSurveyModal.open && (
        <UpsertSurveyModal {...upsertSurveyModal} editedSurvey={editedSurvey} />
      )}

      {deleteSurveyModal.open && editedSurvey && (
        <DeleteSurveyModal {...deleteSurveyModal} editedSurvey={editedSurvey} />
      )}
    </main>
  );
};
