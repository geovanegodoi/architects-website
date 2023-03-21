import { ImageAsync } from '@website/components/gallery';
import { PaginationButtons, Title } from '@website/components/shared';
import styles from './gallery-page.module.css';

/* eslint-disable-next-line */
export interface GalleryPageProps {}

export function GalleryPage(props: GalleryPageProps) {
  return (
    <section className={styles['gallery-page']}>
      <Title values={['GALLERY', 'PHOTOS']} />
      <div className={styles['gallery-grid']}>
        {[...Array(10)].map((_, index) => (
          <ImageAsync src={`/assets/gallery/photo${index + 1}.png`} />
        ))}
      </div>
      <PaginationButtons />
    </section>
  );
}

export default GalleryPage;
