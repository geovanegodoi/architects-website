import styles from './title.module.css';

/* eslint-disable-next-line */
export interface TitleProps {
  values: string[];
}

export function Title({ values }: TitleProps) {
  return (
    <div className={styles['title']}>
      <p>{values[0] || 'LINEONE'}</p>
      <p>{values[1] || 'LINETWO'}</p>
    </div>
  );
}

export default Title;
