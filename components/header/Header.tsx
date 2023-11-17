import styles from './Header.module.scss';
import { getMenu } from '@/utils/fetches/getMenu';
import HeaderClient from '@/components/header/HeaderClient';
import Logo from '@/components/Logo/Logo';

export default async function Header() {
  const { nav } = await getMenu();
  console.log(nav);
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
