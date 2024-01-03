import styles from './Projects.module.scss';
import ImageNext from 'next/image';
import { convertToHtml } from '@/utils';

const Card = ({ project }) => {
  const photo = { src: project?.file?.url, alt: project?.file?.alt };

  return (
    <div className={styles.card}>
      {photo ? (
        <div className={styles.image}>
          <ImageNext src={photo?.src} alt={photo?.alt} width={400} height={200} />
        </div>
      ) : (
        ''
      )}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: convertToHtml(project?.text) }}
      />
    </div>
  );
};
export default Card;
