import { MessageListItem } from 'components';
import React, { useEffect, useState } from 'react';

import { useUser } from 'services/hooks';
import io from 'socket.io-client';

const MessageList = () => {
  const socket = io('http://localhost:8080');
  const { user } = useUser();
  const [list, setList] = useState<Message[] | null>();

  useEffect(() => {
    socket.emit('messageList', { id: user.userId });

    return () => {
      socket.off();
    };
  }, [user.userId, socket]);

  useEffect(() => {
    socket.on('message', (data) => {
      if (!data.chatId) {
        const find = list?.find((el, i) => el._id !== data[i]._id);
        if (!list || find) {
          setList(data);
        }
      }
    });
  }, [list, socket]);

  return (
    <section>
      {list?.map((el, i) => {
        const name =
          el.senderName === user.name ? el.partnerName : el.senderName;
        return <MessageListItem key={i} data={{ ...el, name }} />;
      })}
    </section>
  );
};

export default MessageList;
