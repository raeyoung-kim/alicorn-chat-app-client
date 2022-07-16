import Link from 'next/link';
import React from 'react';
import styles from './MessageListIem.module.css';

type Name = {
  name: string,
};
interface Props {
  data: Message & Name;
}

const MessageListItem: React.FC<Props> = ({ data }) => {
  const room = `/message/${data.chatId}`;

  const backgroundColor =
    room === `${location.pathname}` ? 'whitesmoke' : 'white';

  return (
    <Link href={`${room}?name=${data.name}`}>
      <a>
        <article className={styles.article} style={{ backgroundColor }}>
          <div className={styles.user}>
            <strong>{data.name}</strong>
            <p className={styles.date}>{data.timestamps.slice(0, 10)}</p>
          </div>

          <p className={styles.content}>{data.message}</p>
        </article>
      </a>
    </Link>
  );
};

export default MessageListItem;
