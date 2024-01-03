import { getGlobals } from '@/utils/fetches/getGlobals';
import ConsoleLog from '@/utils/consoleLog';
import ImageNext from 'next/image';
import { convertToHtml } from '@/utils';
import styles from './About.module.scss';

const About = async () => {
  const about = await getGlobals({ slug: 'about-content' });
  const photo = { src: about?.file?.url, alt: about?.file?.alt };

  return (
    <section className={styles.about}>
      <div className={'container'}>
        <ConsoleLog log={about} />
        <div className={styles.wrapper}>
          <div>
            {photo?.url ? (
              <ImageNext
                className={styles.image}
                src={photo?.src}
                alt={photo?.alt}
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
