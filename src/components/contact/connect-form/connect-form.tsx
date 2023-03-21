import styles from './connect-form.module.css';

/* eslint-disable-next-line */
export interface ConnectFormProps {}

export function ConnectForm(props: ConnectFormProps) {
  return (
    <div className={styles['connect-form']}>
      <h2 className="subtitle">Connect with us</h2>
    </div>
  );
}

export default ConnectForm;
