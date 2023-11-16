import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import { UseModal } from '../../../hooks/useModal';
import { CancelIcon } from '../../icons/Icons';

import styles from './Modal.module.css';

interface ModalProps extends UseModal {
  children: ReactNode;
}

export const Modal = ({ children, handleClose, open }: ModalProps) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} onClick={handleClose} />
      <div className={styles.modalWrapper}>
        <div className={styles.buttonWrap} onClick={handleClose}>
          <CancelIcon />
        </div>
        {children}
      </div>
    </>,
    document.getElementById('modal') || document.createElement('div'),
  );
};
