'use client';
import styles from '@/components/header/Header.module.scss';
import IconMenu from '@/components/other/icons/IconMenu';
import IconClose from '@/components/other/icons/IconClose';
import { useState } from 'react';

const HeaderClient = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <header className={`${styles.header} ${activeMenu ? styles.activeMenu : ''}`}>
      <div className={'container ' + styles.container}>
        <span className={styles.close} onClick={() => setActiveMenu(!activeMenu)}>
          <IconClose />
        </span>
        {children}
        <span className={styles.hamburger} onClick={() => setActiveMenu(!activeMenu)}>
          <IconMenu />
        </span>
      </div>
    </header>
  );
};
export default HeaderClient;
