import { Button, PaginationButtons, Title } from '@website/components/shared';
import styles from './showcase.module.css';

/* eslint-disable-next-line */
export interface ShowcaseProps {}

export function Showcase(props: ShowcaseProps) {
  return (
    <section className={styles['showcase']}>
      <div className={styles['left-side']}>
        <Title values={['DIGITAL', 'PROJECT']} />
        <PaginationButtons />
      </div>
      <div className={styles['showcase-image']}>
        <Button variant="white" pointer="right" children="see more" />
      </div>
    </section>
  );
}

export default Showcase;
