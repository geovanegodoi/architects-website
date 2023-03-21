import { Button } from '@website/components/shared';
import styles from './card.module.css';

/* eslint-disable-next-line */
export interface CardProps {
  image: string;
  title: string;
  content: string;
  action?: string;
}

export function Card({ image, title, content, action }: CardProps) {
  return (
    <div className={styles['card']}>
      <img src={image} alt={image} />
      <div className={styles['card-content']}>
        <h2>{title || 'Title'}</h2>
        <p>{content || lorem}</p>
        <Button variant="white" pointer="right">
          see more
        </Button>
      </div>
    </div>
  );
}

export default Card;

const lorem =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ' +
  'Asperiores velvoluptatem incidunt aut, officia quos error animi soluta in possimus. ' +
  'Natus corrupti nisi sit fuga deserunt? Ullam vel repellat vero?';
