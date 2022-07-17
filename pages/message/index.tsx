import React from 'react';
import { SearchUser } from 'components';
import { MessageList } from 'containers';
import { NextPage } from 'next';
import styles from './message.module.css';
import io from 'socket.io-client';

const MeessagePage: NextPage = () => {
  const socket = io('http://localhost:8080');

  return (
    <div className={styles.messagepage_container}>
      <div className={styles.search_user}>
        <SearchUser />
      </div>
      <div className={styles.messagepage_list}>
        <MessageList socket={socket} />
      </div>
    </div>
  );
};

export default MeessagePage;
