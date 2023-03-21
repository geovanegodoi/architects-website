import { Link } from 'react-router-dom';
import styles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {
  variant: 'light' | 'dark' | 'white';
  children?: React.ReactNode;
  pointer?: 'left' | 'right';
  goto?: string;
  onClick?: () => void;
}

export function Button({
  variant,
  children,
  pointer,
  goto,
  onClick,
}: ButtonProps) {
  const classBtn = styles['btn'];
  const classVariant = styles[`btn-${variant}`];
  return (
    <Link
      className={`${classBtn} ${classVariant}`}
      onClick={onClick}
      to={goto || '.'}
    >
      {pointer === 'left' && <i className="fas fa-arrow-left"></i>}
      {children && <span>{children}</span>}
      {pointer === 'right' && <i className="fas fa-arrow-right"></i>}
    </Link>
  );
}

export default Button;
