import { Button } from '../../../../components/global/Button/Button';
import { Form } from '../../../../components/global/Form/Form';
import { Modal } from '../../../../components/global/Modal/Modal';
import { TextInput } from '../../../../components/global/inputs/TextInput/TextInput';
import { UseModal } from '../../../../hooks/useModal';
import { useUpsertSurveyModal } from './useUpsertSurveyModal';
import { ColorInput } from '../../../../components/global/inputs/ColorInput/ColorInput';
import styles from './UpsertSurveyModal.module.css';

interface UpsertSurveyModalProps extends UseModal {
  editedSurvey?: Survey;
}

export const UpsertSurveyModal = ({
  editedSurvey,
  ...modalData
}: UpsertSurveyModalProps) => {
  const {
    errors,
    handleUpsert,
    isDirty,
    isValid,
    register,
    reset,
    setRandomColor,
  } = useUpsertSurveyModal({
    editedSurvey,
    handleCloseModal: modalData.handleClose,
  });

  return (
    <Modal {...modalData}>
      <Form onReset={() => reset({})} onSubmit={handleUpsert}>
        <div>
          <TextInput
            {...register('title')}
            error={errors.title?.message}
            label={`Title: `}
            placeholder='My own title'
          />
          <TextInput
            {...register('age')}
            error={errors.age?.message}
            label={`Age: `}
            type='number'
            placeholder='44'
          />
          <TextInput
            {...register('hight')}
            error={errors.hight?.message}
            label={`Hight: `}
            type='number'
            placeholder='192'
          />
          <div className={styles.colorInputWrapper}>
            <ColorInput
              {...register('favouriteColor')}
              error={errors.favouriteColor?.message}
              label={`Favourite color: `}
            />
            <Button onClick={setRandomColor} type='button'>
              Random color
            </Button>
          </div>
          <TextInput
            {...register('sex')}
            error={errors.sex?.message}
            label={`Sex: `}
            placeholder='male or female'
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
