import styles from './contact-page.module.css';

/* eslint-disable-next-line */
export interface ContactPageProps {}

export function ContactPage(props: ContactPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ContactPage!</h1>
    </div>
  );
}

export default ContactPage;
