import styles from './main-goals.module.css';

/* eslint-disable-next-line */
export interface MainGoalsProps {}

export function MainGoals(props: MainGoalsProps) {
  return (
    <section className={styles['goals']}>
      <h2 className="subtitle">Main Goals</h2>
      <div className={styles['goals-grid']}>
        <div className={styles['goal-container']}>
          <h1>1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            voluptatibus neque commodi id enim, omnis reiciendis repudiandae
            similique nesciunt fuga quaerat aliquid temporibus consequatur error
            velit necessitatibus doloribus vero modi.
          </p>
        </div>
        <div className={styles['goal-container']}>
          <h1>2</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            incidunt, molestias sit odit tenetur nesciunt debitis quisquam
            voluptate. Voluptate cumque libero illo facilis maiores odit
            officiis architecto itaque sed obcaecati.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MainGoals;
