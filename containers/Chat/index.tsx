/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react';
import styles from './Chat.module.css';
import io from 'socket.io-client';
import { useRouter } from 'next/router';
import { useUser } from 'services/hooks';

const Chat: React.FC = () => {
  const { query, replace } = useRouter();
  const { user } = useUser();

  const socket = io('http://localhost:8080');

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
 
    let room: string | string[] =  query.id !as string
    room = room.split('-').filter((el) => el !== user.userId);

    if (message) {
      socket.emit(
        'sendMessage',
        {
          chatId: query.id,
          partnerId: room[0],
          partnerName: query.name,
          senderId: user.userId,
          senderName: user.name,
          message,
          timestamps: Date.now(),
        },
        () => setMessage('')
      );
    }
  };

  useEffect(() => {
    socket.emit('join', { id: query.id }, ({ error }: any) => {
      if (error) {
        alert(error);
      }
    });

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [query, query.id, socket]);

  useEffect(() => {
    socket.on('message', (data: {
      chatList: Message[],
      chatId: string
    }) => {
      if(data.chatId !== undefined) {
        if(query.id !== data.chatId) {
          return replace(`/message/${data.chatId}?name=${query.name}`)
        }
        if(data?.chatList?.length !== messages.length) {
          setMessages(data.chatList);
        }
      }
    });
  }, [message.length, messages, query.id, query.name, replace, socket]);

  return (
    <section className={styles.section}>
      <div>
        {messages.map((el, i) => {
          return (
            <p key={i}>{el.message}</p>
          )
        })}
      </div>
      <form className={styles.form} onSubmit={handleSendMessage}>
        <textarea
          className={styles.textarea}
          placeholder="메시지 입력"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
        <input type={'submit'} value="전송" />
      </form>
    </section>
  );
};

export default Chat;
