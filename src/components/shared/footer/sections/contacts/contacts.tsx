import styles from './contacts.module.css';
import location from '/assets/footer/location.svg';
import phone from '/assets/footer/phone.svg';
import email from '/assets/footer/email.svg';

/* eslint-disable-next-line */
export interface ContactsProps {}

export function Contacts(props: ContactsProps) {
  return (
    <section className={styles['contacts']}>
      <p className="footer-section-title">Contacts</p>

      <div>
        <img src={location} alt="location" />
        <p>100000, Республика Казахстан, г. Караганда, ул. Телевизионная 10</p>
      </div>

      <div>
        <img src={phone} alt="phone" />
        <p>+7 (701) 77 76 811</p>
      </div>

      <div>
        <img src={email} alt="email" />
        <p>Galym.sultanov@mail.ru</p>
      </div>
    </section>
  );
}

export default Contacts;
