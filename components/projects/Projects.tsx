import styles from './Projects.module.scss';
import { getGlobals } from '@/utils/fetches/getGlobals';
import ConsoleLog from '@/utils/consoleLog';
import map from 'lodash/map';
import Card from './Card';
const Projects = async () => {
  const data = await getGlobals({ slug: 'projects-content' });
  return (
    <section className={styles.projects}>
      <ConsoleLog log={data} />
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
