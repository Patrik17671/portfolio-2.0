import styles from './Header.module.scss';
import HeaderClient from '@/components/header/HeaderClient';
import Logo from '@/components/logo/Logo';
import { getGlobals } from '@/utils/fetches/getGlobals';
import isEmpty from 'lodash/isEmpty';
import { NavItemType } from '@/types';
import map from 'lodash/map';
import ConsoleLog from '@/utils/consoleLog';

export default async function Header() {
  const { nav } = await getGlobals({ slug: 'mega-menu' });
  return (
    <HeaderClient>
      <div className={styles.wrapper}>
        <Logo />
        {!isEmpty(nav) ? (
          <ul>
            {map(nav, (item: NavItemType, index: number) => {
              return (
                <li key={index}>
                  <a href={`#${item?.elementId}`}>{item.label}</a>
                </li>
              );
            })}
          </ul>
        ) : (
          ''
        )}
      </div>
    </HeaderClient>
  );
}
