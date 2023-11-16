import { MdCancel, MdDelete, MdEdit } from 'react-icons/md';

import styles from './Icon.module.css';

export const CancelIcon = () => <MdCancel className={styles.icon} />;
export const UpdateIcon = () => <MdEdit className={styles.icon} />;
export const DeleteIcon = () => <MdDelete className={styles.icon} />;
