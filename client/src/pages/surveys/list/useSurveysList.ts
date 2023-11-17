import { useEffect, useState } from 'react';
import { surveyApi } from '../../../api/surveysApi';

export const useSurveysList = () => {
  const [surveys, setSurveys] = useState<Survey[]>([]);

  const getSurveys = () => {
    surveyApi
      .getSurveys()
      .then((res) => setSurveys(res.data.surveys || []))
      .then((err) => {
        // TODO: add toast
      });
  };

  useEffect(() => {
    getSurveys();
  }, []);

  return { getSurveys, surveys };
};
