import { Chat, MessageList } from 'containers';
import { NextPage } from 'next';
import React from 'react';
import styles from './message.module.css';

const DetailMessage: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message_list}>
        <MessageList />
      </div>
      <div className={styles.chat}>
        <Chat />
      </div>
    </div>
  );
};

export default DetailMessage;
