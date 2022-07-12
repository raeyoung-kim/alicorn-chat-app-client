import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { IoChatbubblesSharp } from 'react-icons/io5';
import serverAPI from 'services/api';
import styles from './Header.module.css';

interface Props {
  user: User;
}

const Header: React.FC<Props> = ({ user }) => {
  const { reload } = useRouter();

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
      <div>
        <IoChatbubblesSharp className={styles.icon} />
      </div>
      <div>
        {user.userId ? (
          <button onClick={handleLogout}>로그아웃</button>
        ) : (
          <Link href={'/sign-in'}>
            <a>로그인</a>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
