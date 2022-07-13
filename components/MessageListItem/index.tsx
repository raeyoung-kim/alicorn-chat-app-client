import React from 'react';
import styles from './MessageListIem.module.css';

const MessageListItem: React.FC = () => {
  return (
    <article className={styles.article}>
      <div className={styles.user}>
        <strong>name</strong>
        <p>time</p>
      </div>

      <p className={styles.content}>message</p>
    </article>
  );
};

export default MessageListItem;
