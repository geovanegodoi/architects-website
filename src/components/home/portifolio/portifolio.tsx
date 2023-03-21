import { Button } from '@website/components/shared';
import { Link } from 'react-router-dom';
import styles from './portifolio.module.css';
import photo5 from '/assets/home/photo5.png';
import photo6 from '/assets/home/photo6.png';
import photo7 from '/assets/home/photo7.png';
import photo8 from '/assets/home/photo8.png';

/* eslint-disable-next-line */
export interface PortifolioProps {}

const images: string[] = [photo5, photo6, photo7, photo8];

export function Portifolio(props: PortifolioProps) {
  return (
    <section className={styles['portifolio']}>
      <h2 className="subtitle">Our Projects</h2>
      <div className={styles['portifolio-grid']}>
        <div className={styles['portifolio-title']}>
          {/* <h1>LEISURE CENTER</h1> */}
        </div>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`sample-${index}`} />
        ))}
      </div>
      <div className={styles['portifolio-button']}>
        <Link to="/projects">
          <Button variant="dark" pointer="right" children="all projects" />
        </Link>
      </div>
    </section>
  );
}

export default Portifolio;
