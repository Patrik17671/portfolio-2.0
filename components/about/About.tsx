import { getGlobals } from '@/utils/fetches/getGlobals';
import ImageNext from 'next/image';
import { convertToHtml } from '@/utils';
import styles from './About.module.scss';
import { FC } from 'react';
import { AboutType, PhotoType } from '@/types';

const About: FC = async () => {
  const about: AboutType = await getGlobals({ slug: 'about-content' });
  const photo: PhotoType = { src: about?.file?.cloudinary?.secure_url, alt: about?.file?.alt };

  return (
    <section className={styles.about}>
      <div className={'container'}>
        <div className={styles.wrapper}>
          <div>
            {photo?.src ? (
              <ImageNext
                className={styles.image}
                src={photo.src}
                alt={photo?.alt || 'photo'}
                width={502}
                height={610}
              />
            ) : (
              ''
            )}
          </div>
          <div>
            <h2>{about?.title}</h2>
            {about?.text ? (
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: convertToHtml(about?.text) }}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
