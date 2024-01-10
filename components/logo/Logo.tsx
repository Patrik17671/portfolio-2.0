import ImageNext from 'next/image';
import styles from './Logo.module.scss';
import { getGlobals } from '@/utils/fetches/getGlobals';
import { WebInstanceType } from '@/types';
import { FC } from 'react';
const Logo: FC = async () => {
  const webInstance: WebInstanceType = await getGlobals({ slug: 'web-instance' });

  return (
    <div className={styles.logo}>
      {webInstance?.file?.url ? (
        <ImageNext src={webInstance.file.url} alt={'Logo'} />
      ) : (
        <>{webInstance?.logo}</>
      )}
    </div>
  );
};
export default Logo;
