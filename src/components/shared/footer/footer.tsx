import styles from './footer.module.css';
import { Contacts, Information, SocialMedias } from './sections';
import logodark from '/assets/footer/logo-dark.png';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-grid']}>
        <img src={logodark} alt="logo-dark" />
        <Information />
        <Contacts />
        <SocialMedias />
      </div>
      <p className={styles['trademark']}>
        © 2023 Digital Project. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
