import React, { useEffect, useRef } from 'react';
import { useUser } from 'services/hooks';
import styles from './Message.module.css';

interface Props {
  data: Message[];
  height?: string;
}

const Messages: React.FC<Props> = ({ data, height }) => {
  const sectionRef = useRef<HTMLSelectElement>(null);
  const { user } = useUser();

  useEffect(() => {
    if (sectionRef) {
      sectionRef.current?.scrollTo(0, sectionRef.current?.scrollHeight);
    }
  }, [data.length]);

  return (
    <section
      ref={sectionRef}
      className={styles.container}
      style={{ height: height || '70vh' }}
    >
      {data.map((el, i) => {
        return (
          <div key={i} className={styles.message_wrapper}>
            <p
              className={styles.name}
              style={{
                color: el.senderId === user.userId ? '#4e61ff' : 'black',
                marginLeft: el.senderId === user.userId ? 'auto' : '0px',
              }}
            >
              {el.senderId !== user.userId ? el.senderName : null}
            </p>
            <div
              className={styles.message}
              style={{
                backgroundColor:
                  el.senderId === user.userId
                    ? '#cce2ff'
                    : 'rgba(0, 0, 0, 0.05)',
              }}
            >
              {el.message.replace('\r\n', '<br />')}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Messages;
