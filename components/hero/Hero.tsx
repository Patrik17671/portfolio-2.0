import styles from './Hero.module.scss';
import { getHero } from '@/utils/fetches/getHero';
import isEmpty from 'lodash/isEmpty';
import ConsoleLog from '@/utils/consoleLog';
import { Suspense } from 'react';
const Hero = async () => {
  const hero = await getHero();

  const title = hero?.title[0]?.children[0]?.text;

  return (
    <div className={styles.hero}>
      <Suspense>
        <ConsoleLog log={hero} />
      </Suspense>
      <div className={'container'}>
        {!isEmpty(hero?.title) ? <div dangerouslySetInnerHTML={{ __html: title }} /> : ''}
      </div>
    </div>
  );
};
export default Hero;
