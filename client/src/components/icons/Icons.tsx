import { IconBaseProps } from 'react-icons';
import { MdCancel, MdDelete, MdEdit } from 'react-icons/md';

import styles from './Icon.module.css';

interface IconProps extends IconBaseProps {}

export const CancelIcon = (props: IconProps) => (
  <MdCancel className={styles.icon} {...props} />
);
export const UpdateIcon = (props: IconProps) => (
  <MdEdit className={styles.icon} {...props} />
);
export const DeleteIcon = (props: IconProps) => (
  <MdDelete className={styles.icon} {...props} />
);
