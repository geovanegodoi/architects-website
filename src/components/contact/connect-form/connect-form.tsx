import { Button } from '@website/components/shared';
import { Form } from 'react-router-dom';
import styles from './connect-form.module.css';
import contact from '/assets/contact/contact.png';
/* eslint-disable-next-line */
export interface ConnectFormProps {}

export function ConnectForm(props: ConnectFormProps) {
  return (
    <section className={styles['connect-form']}>
      <h2 className="subtitle">Connect with us</h2>
      <Form>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="phone" placeholder="Phone" />
        <input type="email" name="email" placeholder="E-mail" />
        <input type="text" name="subject" placeholder="subject" />
        <textarea name="message" placeholder="Message" />
        <p>By submitting an application you agree to the privacy policy</p>
        <Button variant="dark" pointer="right" children="send" />
      </Form>
      <img src={contact} alt={contact} />
    </section>
  );
}

export default ConnectForm;
