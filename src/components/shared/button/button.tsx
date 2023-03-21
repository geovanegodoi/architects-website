import styles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {
  variant: 'light' | 'dark' | 'white';
  children?: React.ReactNode;
  pointer?: 'left' | 'right';
}

export function Button({ variant, children, pointer }: ButtonProps) {
  const classBtn = styles['btn'];
  const classVariant = styles[`btn-${variant}`];
  return (
    <button className={`${classBtn} ${classVariant}`}>
      {pointer === 'left' && <i className="fas fa-arrow-left"></i>}
      {children && <span>{children}</span>}
      {pointer === 'right' && <i className="fas fa-arrow-right"></i>}
    </button>
  );
}

export default Button;
