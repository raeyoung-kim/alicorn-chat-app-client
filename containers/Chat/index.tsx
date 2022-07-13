import React from 'react';
import styles from './Chat.module.css';

const Chat: React.FC = () => {
  return (
    <section className={styles.section}>
      <div>message...</div>
      <form className={styles.form}>
        <textarea
          className={styles.textarea}
          placeholder="메시지 입력"
        ></textarea>
        <input type={'submit'} value="전송" />
      </form>
    </section>
  );
};

export default Chat;
