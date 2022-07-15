import React, { useEffect, useRef } from 'react';
import styles from './Message.module.css';

interface Props {
  data: Message[];
  height?: string;
}

const Messages: React.FC<Props> = ({ data, height }) => {
  const sectionRef = useRef<HTMLSelectElement>(null);

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
            <p className={styles.name}>{el.senderName}</p>
            <div className={styles.message}>
              {el.message.replace('\r\n', '<br />')}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Messages;
