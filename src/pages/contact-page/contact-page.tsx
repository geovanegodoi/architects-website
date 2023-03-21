import { ConnectForm, Information } from '@website/components/contact';
import styles from './contact-page.module.css';

/* eslint-disable-next-line */
export interface ContactPageProps {}

export function ContactPage(props: ContactPageProps) {
  return (
    <div className={styles['contact-page']}>
      <Information />
      <ConnectForm />
    </div>
  );
}

export default ContactPage;
