import { MessageListItem } from 'components';
import React, { useEffect, useState } from 'react';

import { useUser } from 'services/hooks';
import { Socket } from 'socket.io-client';

interface Props {
  socket: Socket;
}

const MessageList: React.FC<Props> = ({ socket }) => {
  const { user } = useUser();
  const [list, setList] = useState<Message[] | null>();

  useEffect(() => {
    socket.emit('messageList', { id: user.userId });
  }, [user.userId, socket]);

  useEffect(() => {
    socket.on('message_list', (data) => {
      setList(data);
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
