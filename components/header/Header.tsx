import styles from './Header.module.scss';
import { getMenu } from '@/utils/fetches/getMenu';
import HeaderClient from '@/components/header/HeaderClient';
import Logo from '@/components/Logo/Logo';
import { getGlobals } from '@/utils/fetches/getGlobals';

export default async function Header() {
  const { nav } = await getGlobals({ slug: 'mega-menu' });
  return (
    <HeaderClient>
      <div className={styles.wrapper}>
        <Logo />
        <ul>
          {nav.map((item, index) => {
            return (
              <li key={index}>
                <a href={`#${item?.elementId}`}>{item.label}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </HeaderClient>
  );
}
