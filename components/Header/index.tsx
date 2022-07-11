import React from 'react';
import { IoChatbubblesSharp } from 'react-icons/io5';
import styles from './Header.module.css';
const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div>
        <IoChatbubblesSharp className={styles.icon} />
      </div>
      <div>User</div>
    </header>
  );
};

export default Header;
