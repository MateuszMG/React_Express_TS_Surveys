import { Button } from '../../../components/global/Button/Button';
import { DeleteIcon, UpdateIcon } from '../../../components/icons/Icons';
import { useSurveysList } from './useSurveysList';
import styles from './SurveysList.module.css';

interface SurveysListProps {
  handleOpenDeleteSurveyModal: (survey: Survey) => void;
  handleOpenUpsertSurveyModal: (survey: Survey) => void;
}

export const SurveysList = ({
  handleOpenDeleteSurveyModal,
  handleOpenUpsertSurveyModal,
}: SurveysListProps) => {
  const { getSurveys, surveys } = useSurveysList();

  return (
    <div>
      <h1 className={styles.title}>Surveys</h1>

      <div className={styles.buttonWrapper}>
        <Button onClick={getSurveys}>Refresh surveys</Button>
      </div>

      <article className={styles.article}>
        {surveys.map((survey) => (
          <section key={survey.id} className={styles.section}>
            <div>
              <h2>{survey.title}</h2>
              <p>Age : {survey.age}</p>
              <p>Favourite color : {survey.favouriteColor}</p>
              <p>Hight : {survey.hight}</p>
              <p>Sex : {survey.sex}</p>
            </div>

            <div className={styles.iconsWrapper}>
              <UpdateIcon onClick={() => handleOpenUpsertSurveyModal(survey)} />
              <DeleteIcon onClick={() => handleOpenDeleteSurveyModal(survey)} />
            </div>
          </section>
        ))}
      </article>
    </div>
  );
};
