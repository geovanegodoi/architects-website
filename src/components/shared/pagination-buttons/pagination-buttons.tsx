import Button from '../button/button';
import styles from './pagination-buttons.module.css';

/* eslint-disable-next-line */
export interface PaginationButtonsProps {}

export function PaginationButtons(props: PaginationButtonsProps) {
  return (
    <div className={styles['pagination-buttons']}>
      <Button variant="white" pointer="left" />
      <Button variant="light" pointer="right" />
    </div>
  );
}

export default PaginationButtons;
