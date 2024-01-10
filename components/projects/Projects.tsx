import styles from './Projects.module.scss';
import { getGlobals } from '@/utils/fetches/getGlobals';
import map from 'lodash/map';
import Card from './Card';
import { FC } from 'react';
import { ProjectsDataType } from '@/types';
const Projects: FC = async () => {
  const data: ProjectsDataType = await getGlobals({ slug: 'projects-content' });
  return (
    <section className={styles.projects}>
      <div className={'container'}>
        {data?.title ? <h2>{data?.title}</h2> : ''}
        <div className={styles.list}>
          {map(data?.projects, (project, index) => {
            return <Card project={project} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Projects;
