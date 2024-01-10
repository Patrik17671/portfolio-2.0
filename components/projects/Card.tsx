import styles from './Projects.module.scss';
import ImageNext from 'next/image';
import { convertToHtml } from '@/utils';
import { PhotoType, ProjectType } from '@/types';
import { FC } from 'react';

type CardProps = {
  project: ProjectType;
};
const Card: FC<CardProps> = ({ project }) => {
  const photo: PhotoType = { src: project?.file?.cloudinary?.secure_url, alt: project?.file?.alt };

  return (
    <div className={styles.card}>
      {photo.src ? (
        <div className={styles.image}>
          <ImageNext src={photo.src} alt={photo.alt || 'photo'} width={400} height={200} />
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
