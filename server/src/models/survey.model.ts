import { defaultSurveys } from '../utils/defaultSurveys';

export interface Survey {
  age: number;
  favouriteColor: string;
  hight: number;
  id: string;
  sex: string;
  title: string;
}

class SurveyModel {
  surveys: Survey[];

  constructor() {
    this.surveys = defaultSurveys;
  }

  get = () => this.surveys;

  create = (data: Omit<Survey, 'id'>) => {
    this.surveys.push({ id: Math.random().toString(), ...data });
  };

  update = (data: Survey) => {
    this.surveys = this.surveys.map((survey) =>
      survey.id === data.id ? data : survey,
    );
  };

  delete = (id: String) => {
    this.surveys = this.surveys.filter((survey) => survey.id !== id);
  };
}

export const surveyModel = new SurveyModel();
