import { FormEvent } from 'react';
import { surveyApi } from '../../../../api/surveysApi';
import { Button } from '../../../../components/global/Button/Button';
import { Form } from '../../../../components/global/Form/Form';
import { Modal } from '../../../../components/global/Modal/Modal';
import { UseModal } from '../../../../hooks/useModal';

interface DeleteSurveyModalProps extends UseModal {
  editedSurvey: Survey;
}

export const DeleteSurveyModal = ({
  editedSurvey,
  ...modalData
}: DeleteSurveyModalProps) => {
  const handleDelete = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    surveyApi
      .deleteSurvey(editedSurvey.id)
      .then(() => modalData.handleClose())
      .catch(() => {
        // TODO: add tost
      });
  };

  return (
    <Modal {...modalData}>
      <Form onReset={modalData.handleClose} onSubmit={handleDelete}>
        <h1>Do you want to delete {editedSurvey.title} ?</h1>
        <Form.ButtonsWrapper>
          <Button type={'reset'}>Cancel</Button>
          <Button type={'submit'}>Delete survey</Button>
        </Form.ButtonsWrapper>
      </Form>
    </Modal>
  );
};
