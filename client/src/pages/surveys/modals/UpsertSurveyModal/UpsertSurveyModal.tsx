import { Button } from '../../../../components/global/Button/Button';
import { Form } from '../../../../components/global/Form/Form';
import { Modal } from '../../../../components/global/Modal/Modal';
import { TextInput } from '../../../../components/global/inputs/TextInput/TextInput';
import { UseModal } from '../../../../hooks/useModal';
import { useUpsertSurveyModal } from './useUpsertSurveyModal';

interface UpsertSurveyModalProps extends UseModal {
  editedSurvey?: Survey;
}

export const UpsertSurveyModal = ({
  editedSurvey,
  ...modalData
}: UpsertSurveyModalProps) => {
  const { errors, handleUpsert, isDirty, isValid, register, reset } =
    useUpsertSurveyModal({ editedSurvey });

  return (
    <Modal {...modalData}>
      <Form onReset={() => reset({})} onSubmit={handleUpsert}>
        <div>
          <TextInput
            {...register('title')}
            error={errors.title?.message}
            label={`Title: `}
          />
          <TextInput
            {...register('age')}
            error={errors.age?.message}
            label={`Age: `}
            type='number'
          />
          <TextInput
            {...register('hight')}
            error={errors.hight?.message}
            label={`Hight: `}
            type='number'
          />
          <TextInput
            {...register('favouriteColor')}
            error={errors.favouriteColor?.message}
            label={`Favourite color: `}
          />
          <TextInput
            {...register('sex')}
            error={errors.sex?.message}
            label={`Sex: `}
          />
        </div>

        <Form.ButtonsWrapper>
          <Button type={'reset'}>Reset</Button>
          <Button disabled={!isValid || !isDirty} type={'submit'}>
            {editedSurvey ? 'Edit' : 'Add'} survey
          </Button>
        </Form.ButtonsWrapper>
      </Form>
    </Modal>
  );
};
