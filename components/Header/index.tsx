import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { IoChatbubblesSharp } from 'react-icons/io5';
import serverAPI from 'services/api';
import { AiFillCaretDown } from 'react-icons/ai';
import styles from './Header.module.css';
interface Props {
  user: User;
}

const Header: React.FC<Props> = ({ user }) => {
  const { reload } = useRouter();
  const [isMenu, setIsMenu] = useState(false);

  const handleLogout = async () => {
    try {
      await serverAPI.post('/auth/logout');
      reload();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <Link href={'/'}>
          <a>
            <IoChatbubblesSharp className={styles.icon} />
          </a>
        </Link>
        <div style={{ height: '100%' }}>
          {user.userId ? (
            <div className={styles.menu}>
              <div
                style={{
                  backgroundColor: isMenu ? 'rgba(0,0,0,.05)' : 'white',
                }}
                className={styles.user}
                onClick={() => setIsMenu(!isMenu)}
              >
                {user.name} <AiFillCaretDown className={styles.caret_down} />
              </div>
              <div
                style={{
                  position: 'relative',
                }}
              >
                {isMenu && (
                  <ul className={styles.menu_list}>
                    <li onClick={handleLogout}>로그아웃</li>
                  </ul>
                )}
              </div>
            </div>
          ) : (
            <Link href={'/sign-in'}>
              <a className={styles.button}>로그인</a>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
