import {
  Company,
  MainGoals,
  Portifolio,
  Showcase,
} from '@website/components/home';
import styles from './home-page.module.css';

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  return (
    <div className={styles['home-page']}>
      <Showcase />
      <Company />
      <MainGoals />
      <Portifolio />
    </div>
  );
}

export default HomePage;
