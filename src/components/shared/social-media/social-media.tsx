import styles from './social-media.module.css';

/* eslint-disable-next-line */
export interface SocialMediaProps {
  variant: 'facebook' | 'twitter' | 'linkedin' | 'pinterest';
  color: 'light' | 'dark';
  href?: string;
}

const icons = {
  facebook: 'fa-facebook',
  twitter: 'fa-twitter',
  linkedin: 'fa-linkedin',
  pinterest: 'fa-pinterest',
};

export function SocialMedia({ variant, color, href }: SocialMediaProps) {
  return (
    <a href={href} className={styles[color]}>
      <i className={`fab ${icons[variant]} fa-1x`}></i>
    </a>
  );
}

export default SocialMedia;
