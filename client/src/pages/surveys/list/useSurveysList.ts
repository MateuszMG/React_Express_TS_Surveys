import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { surveyApi } from '../../../api/surveysApi';

export const useSurveysList = () => {
  const [surveys, setSurveys] = useState<Survey[]>([]);

  const getSurveys = () => {
    surveyApi
      .getSurveys()
      .then((res) => setSurveys(res.data.surveys || []))
      .catch(() => toast.error('Something went wrong'));
  };

  useEffect(() => {
    getSurveys();
  }, []);

  return { getSurveys, surveys };
};
