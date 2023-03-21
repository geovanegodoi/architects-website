import { Button } from '@website/components/shared';
import styles from './company.module.css';
import photo2 from '/assets/home/photo2.png';
import photo3 from '/assets/home/photo3.png';
import photo4 from '/assets/home/photo4.png';

/* eslint-disable-next-line */
export interface CompanyProps {}

export function Company(props: CompanyProps) {
  return (
    <section className={styles['company']}>
      <div className={styles['photos-container']}>
        <img src={photo2} alt="photo2" />
        <img src={photo4} alt="photo4" />
      </div>
      <img src={photo3} alt="photo3" />
      <div className={styles['text-container']}>
        <h2 className="subtitle">Company</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <Button variant="white" pointer="right">
          read more
        </Button>
      </div>
    </section>
  );
}

export default Company;
