import { Link } from 'react-router-dom';
import styles from './information.module.css';

/* eslint-disable-next-line */
export interface InformationProps {}

export function Information(props: InformationProps) {
  return (
    <section className={styles['information']}>
      <p className="footer-section-title">Information</p>
      <Link to="/" children="Home" />
      <Link to="/" children="Gallery" />
      <Link to="/" children="Projects" />
      <Link to="/" children="Contacts" />
    </section>
  );
}

export default Information;
