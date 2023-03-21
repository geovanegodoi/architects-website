import { Title } from '@website/components/shared';
import styles from './information.module.css';
import maps from '/assets/contact/maps.png';

/* eslint-disable-next-line */
export interface InformationProps {}

export function Information(props: InformationProps) {
  return (
    <section className={styles['contact-information']}>
      <div className={styles['information-flex']}>
        <Title values={['CONTACT', 'INFORMATION']} />
        <p className={styles['name']}>Digital Project</p>
        <p className={styles['address']}>г. Караганда, ул. Телевизионная 10</p>
        <p className={styles['phone']}>+7 (701) 77 76 811</p>
        <p className={styles['email']}>Galym.sultanov@mail.ru</p>
      </div>
      <img src={maps} alt={maps} />
    </section>
  );
}

export default Information;
