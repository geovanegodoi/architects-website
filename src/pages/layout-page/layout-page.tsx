import { Footer, Header } from '@website/components/shared';
import { OneOrMany } from '@website/models';
import { Outlet } from 'react-router';
import { ScrollRestoration } from 'react-router-dom';
import styles from './layout-page.module.css';

/* eslint-disable-next-line */
export interface LayoutPageProps {}

export function LayoutPage(props: LayoutPageProps) {
  return (
    <>
      <ScrollRestoration />
      <div className={styles['layout-page']}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default LayoutPage;

export function LayoutPageDecorator({
  children,
}: {
  children: OneOrMany<JSX.Element>;
}) {
  return (
    <>
      <div className={styles['layout-page']}>
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
}
