import { Chat, MessageList } from 'containers';
import { NextPage } from 'next';
import React from 'react';
import styles from './message.module.css';
import io from 'socket.io-client';

const DetailMessage: NextPage = () => {
  const socket = io('http://localhost:8080');
  return (
    <div className={styles.container}>
      <div className={styles.message_list}>
        <MessageList socket={socket} />
      </div>
      <div className={styles.chat}>
        <Chat socket={socket} />
      </div>
    </div>
  );
};

export default DetailMessage;
