import styles from './Hero.module.scss';
import isEmpty from 'lodash/isEmpty';
import { convertToHtml } from '@/utils';
import ImageNext from 'next/image';
import { getGlobals } from '@/utils/fetches/getGlobals';
import { FC } from 'react';
import { HeroType } from '@/types';
const Hero: FC = async () => {
  const hero: HeroType = await getGlobals({ slug: 'hero-content' });
  const bgImg = hero.file?.url;

  return (
    <div className={styles.hero}>
      {bgImg ? (
        <ImageNext
          className={styles.bgImg}
          src={bgImg}
          alt={'Pozadie'}
          width={1920}
          height={1281}
          priority={true}
        />
      ) : (
        ''
      )}
      <div className={'container'}>
        {!isEmpty(hero.title) ? (
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: convertToHtml(hero.title) }}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
export default Hero;
