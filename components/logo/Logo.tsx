import { getWebInstance } from '@/utils/fetches/getWebInstance';
import isEmpty from 'lodash/isEmpty';
import ImageNext from 'next/image';
import styles from './Logo.module.scss';
import { getGlobals } from '@/utils/fetches/getGlobals';
const Logo = async () => {
  const webInstance = await getGlobals({ slug: 'web-instance' });

  return (
    <div className={styles.logo}>
      {!isEmpty(webInstance?.file) ? (
        <ImageNext src={webInstance?.file?.url} alt={'Logo'} />
      ) : (
        <>{webInstance?.logo}</>
      )}
    </div>
  );
};
export default Logo;
