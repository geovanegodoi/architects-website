import styles from './social-medias.module.css';
import { SocialMedia } from '@website/components/shared';

/* eslint-disable-next-line */
export interface SocialMediasProps {}

export function SocialMedias(props: SocialMediasProps) {
  return (
    <section className={styles['social-medias']}>
      <p className="footer-section-title">Social Medias</p>
      <div>
        <SocialMedia variant="facebook" color="light" />
        <SocialMedia variant="twitter" color="light" />
        <SocialMedia variant="linkedin" color="light" />
        <SocialMedia variant="pinterest" color="light" />
      </div>
    </section>
  );
}

export default SocialMedias;
