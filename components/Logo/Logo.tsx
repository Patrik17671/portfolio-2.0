import { getWebInstance } from '@/utils/fetches/getWebInstance'
import isEmpty from 'lodash/isEmpty'
import ImageNext from 'next/image'
import styles from './Logo.module.scss'
const Logo = async () => {
  const webInstance = await getWebInstance()

  return (
    <div className={styles.logo}>
      {!isEmpty(webInstance?.file) ? (
        <ImageNext src={webInstance?.file?.url} alt={'Logo'} />
      ) : (
        <>{webInstance?.logo}</>
      )}
    </div>
  )
}
export default Logo
