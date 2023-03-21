import { Card, CardProps } from '@website/components/projects';
import { PaginationButtons, Title } from '@website/components/shared';
import styles from './projects-page.module.css';
import photo1 from '/assets/projects/project1.png';
import photo2 from '/assets/projects/project2.png';
import photo3 from '/assets/projects/project3.png';

/* eslint-disable-next-line */
export interface ProjectsPageProps {}

export function ProjectsPage(props: ProjectsPageProps) {
  return (
    <div className={styles['projects-page']}>
      <Title values={['OUR', 'PROJECTS']} />
      {projects.map((project, index) => (
        <Card key={index} {...project} />
      ))}
      <PaginationButtons />
    </div>
  );
}

export default ProjectsPage;

const projects: CardProps[] = [
  {
    title: 'Comprehensive school',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
      'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image: photo1,
  },
  {
    title: 'Parking for 500 cars',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
      'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image: photo2,
  },
  {
    title: 'Office interior project',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
      'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image: photo3,
  },
];
