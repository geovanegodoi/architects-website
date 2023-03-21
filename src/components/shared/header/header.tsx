import { Link } from 'react-router-dom';
import styles from './header.module.css';
import logo from '/assets/logo.png';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header className={styles['header']}>
      <img src={logo} alt="logo" />
      <nav className={styles['navbar-top']}>
        <Link to="/" children="HOME" />
        <Link to="/" children="GALLERY" />
        <Link to="/" children="PROJECTS" />
        <Link to="/" children="CONTACT" />
      </nav>
    </header>
  );
}

export default Header;
